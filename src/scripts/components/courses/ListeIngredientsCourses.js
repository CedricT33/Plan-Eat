import { mettrePremiereLettreEnMajuscule } from "../../services/Util";
import { enregistrerCourses, recupererCoursesSemaine } from "../../services/CoursesService";

export default function ListeIngredientsCourses({ingredient, semaine, annee, setCoursesSemaine}) {

    const nomIngredient = mettrePremiereLettreEnMajuscule(ingredient?.produit);

    const quantiteIngredient = ingredient.unite_quantite.raccourci
        ? ingredient.quantite + " " + ingredient.unite_quantite.raccourci
        : ingredient.quantite;

    const numeroSemaine = parseInt(semaine.split(" ")[1]);

    const classeNomIngredient = ingredient.checked ? "barre" : "";

    function onChekedIngredient(checked) {
        ingredient.checked = checked;
        enregistrerCourses(null, numeroSemaine, annee);
        setCoursesSemaine(recupererCoursesSemaine(annee, semaine));
    }

    return (
        <li>
            <div className={classeNomIngredient}>{nomIngredient}<span>{quantiteIngredient}</span></div>
            <input id={ingredient.key}
                type="checkbox"
                onChange={e => onChekedIngredient(e.target.checked)}
                checked={ingredient.checked}></input>
        </li>
    )
}
