import ListeIngredientsCourses from "./ListeIngredientsCourses";
import { mettrePremiereLettreEnMajuscule } from "../../services/Util";

export default function ListeCategoriesCourses({categorie, ingredients, semaine, annee, setCoursesSemaine}) {

    const listeIngredientsCourses = ingredients?.map(ingredient => {
        if (!ingredient.checked) {
            return <ListeIngredientsCourses
                    key={ingredient.key}
                    ingredient={ingredient}
                    semaine={semaine}
                    annee={annee}
                    setCoursesSemaine={setCoursesSemaine}/>
        }
        return null;
    })

    return (
        <li>
            <h2>{mettrePremiereLettreEnMajuscule(categorie)}</h2>
            <ul>
                {listeIngredientsCourses}
            </ul>
        </li>
    )
}
