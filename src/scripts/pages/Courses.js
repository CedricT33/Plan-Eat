import { useEffect, useState } from "react";
import SelectPerso from "../components/formulaire/atomes/SelectPerso";
import { recupererListeSemainesCourses, recupererCoursesSemaine,
    recupererCategoriesActiveCoursesSemaine, recupererListeSemainesPourSelect,
    calculerElementsCoursesActifs, recupererCoursesParCategorie } from "../services/CoursesService";
import ListeCategoriesCourses from "../components/courses/ListeCategoriesCourses";
import ListeIngredientsCourses from "../components/courses/ListeIngredientsCourses";

export default function Courses() {

    const listeSemaineEtAnnee = recupererListeSemainesCourses();
    const listeSemaines = recupererListeSemainesPourSelect(listeSemaineEtAnnee);
    const [anneeSelected, setAnneeSelected] = useState(new Date().getFullYear());
    const [semaineSelected, setSemaineSelected] = useState(listeSemaines[1].nom);
    const [coursesSemaine, setCoursesSemaine] = useState();
    const [nombreElementsCourses, setNombreElementsCourses] = useState();

    const listeCategoriesCourses = recupererCategoriesActiveCoursesSemaine(coursesSemaine)?.map(((categorie,i) => {
        return <ListeCategoriesCourses
                    categorie={categorie}
                    ingredients={recupererCoursesParCategorie(coursesSemaine?.ingredients, categorie)}
                    semaine={semaineSelected}
                    annee={anneeSelected}
                    key={i}
                    setCoursesSemaine={setCoursesSemaine}/>
    }))

    const listeCoursesFinies = coursesSemaine?.ingredients.map(ingredient => {
        if (ingredient?.checked === true) {
            return <ListeIngredientsCourses
            key={ingredient.key}
            ingredient={ingredient}
            semaine={semaineSelected}
            annee={anneeSelected}
            setCoursesSemaine={setCoursesSemaine}/>
        }
        return null;
    })

    const listeCategorieCoursesFinies = listeCoursesFinies === undefined || coursesSemaine?.ingredients?.length === 0
        ? <div className="no-courses">Pas de courses cette semaine...</div>
        : <li className="liste-finie">
            <h2>Fini</h2>
            <ul>
                {listeCoursesFinies}
            </ul>
        </li>

    function recupererAnneeAvecSemaine(numeroSemaine) {
        return listeSemaineEtAnnee?.find(semaine =>{
            return semaine.semaine === numeroSemaine
        }).annee;
    }

    useEffect(() => {
        const numeroSemaineSelected = parseInt(semaineSelected.split(" ")[1]);
        const numeroAnneeSelected =  recupererAnneeAvecSemaine(numeroSemaineSelected);
        setAnneeSelected(numeroAnneeSelected);
        setCoursesSemaine(recupererCoursesSemaine(anneeSelected, numeroSemaineSelected));
        setNombreElementsCourses(calculerElementsCoursesActifs(coursesSemaine));
    }, [semaineSelected, coursesSemaine])

    return (
        <div className="courses-container">
            <div className="header-courses">
                <div className="info">{nombreElementsCourses}</div>
                <SelectPerso 
                    value={semaineSelected}
                    liste={listeSemaines}
                    setData={setSemaineSelected}/>
            </div>
            <div className="container-check-liste">
                <ul>
                    {listeCategoriesCourses}
                    {listeCategorieCoursesFinies}
                </ul>
            </div>
        </div>
    );
}