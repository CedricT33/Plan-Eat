import { onClickOKFormulaire } from "../../services/FormulaireService";

export default function BoutonOkFormulaire({label, categorie, key}) {

    return (
        <div className="validation-container">
            <button
                className="bouton"
                onClick={e => onClickOKFormulaire(categorie, key)}>
                {label}
            </button>
        </div>
    );
}