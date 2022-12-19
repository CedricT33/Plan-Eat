import { onClickSupprimerProduitCourses } from "../../services/CoursesService";

export default function BoutonSuppressionProduitCourses({index, setIndex, semaine, annee}) {

    return (
        <>
            <div className="explication-suppression">
                {`Ce produit est déjà dans la liste de courses de la semaine ${semaine}, voulez-vous le supprimer ?`}
            </div>
            <div className="validation-container">
                <button
                    className="bouton"
                    onClick={() => onClickSupprimerProduitCourses(index, semaine, annee, setIndex)}>
                    SUPPRIMER
                </button>
            </div>
        </>
    );
}