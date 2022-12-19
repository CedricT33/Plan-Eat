import { useEffect, useState } from "react";
import SelectPerso from "../components/formulaire/atomes/SelectPerso";
import { recupererListeSemainesCourses, recupererCoursesSemaine,
    recupererCategoriesActiveCoursesSemaine, recupererListeSemainesPourSelect,
    calculerElementsCoursesActifs, recupererCoursesParCategorie,
    semaineActiveCourses, anneeActiveCourses, modifierSemaineCoursesActive,
    modifierAnneeCoursesActive } from "../services/CoursesService";
import ListeCategoriesCourses from "../components/courses/ListeCategoriesCourses";
import ListeIngredientsCourses from "../components/courses/ListeIngredientsCourses";

export default function Courses() {

    const listeSemaineEtAnnee = recupererListeSemainesCourses();
    const listeSemaines = recupererListeSemainesPourSelect(listeSemaineEtAnnee);
    const [anneeSelected, setAnneeSelected] = useState(anneeActiveCourses);
    const [semaineSelected, setSemaineSelected] = useState(semaineActiveCourses);
    const [coursesSemaine, setCoursesSemaine] = useState();
    const [nombreElementsCourses, setNombreElementsCourses] = useState();
    const [ingredientsEtProduits, setIngredientsEtProduits] = useState([]);

    const listeCategoriesCourses = recupererCategoriesActiveCoursesSemaine(coursesSemaine)?.map(((categorie,i) => {
        return <ListeCategoriesCourses
                    categorie={categorie}
                    ingredients={recupererCoursesParCategorie(ingredientsEtProduits, categorie)}
                    semaine={semaineSelected}
                    annee={anneeSelected}
                    key={i}
                    setCoursesSemaine={setCoursesSemaine}/>
    }))

    const listeCoursesFinies = ingredientsEtProduits.map(ingredient => {
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

    const listeCategorieCoursesFinies = listeCoursesFinies === undefined || ingredientsEtProduits?.length === 0
        ?   <>
                <div className="no-courses">Pas de courses cette semaine...</div>
                <div className="no-courses"> Vous pouvez rajouter des produits manuellement en cliquant sur le bouton + ou ajouter une recette dans l'agenda...</div>
            </>
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
        modifierAnneeCoursesActive(numeroAnneeSelected);
        modifierSemaineCoursesActive(semaineSelected);
        setCoursesSemaine(recupererCoursesSemaine(anneeSelected, numeroSemaineSelected));
        setNombreElementsCourses(calculerElementsCoursesActifs(coursesSemaine));
        if (coursesSemaine) {
            setIngredientsEtProduits([...coursesSemaine?.ingredients, ...coursesSemaine?.produits]);
        }
        else {
            setIngredientsEtProduits([]);
        }
    }, [semaineSelected, coursesSemaine])

    return (
        <div className="courses-container" semaine={semaineSelected} annee={anneeSelected}>
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