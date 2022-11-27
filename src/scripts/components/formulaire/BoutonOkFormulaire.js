import { onClickOKFormulaire } from "../../services/FormulaireService";

export default function BoutonOkFormulaire({label, categorie, clef}) {

    return (
        <div className="validation-container">
            <button
                className="bouton"
                onClick={() => onClickOKFormulaire(categorie, clef)}>
                {label}
            </button>
        </div>
    );
}