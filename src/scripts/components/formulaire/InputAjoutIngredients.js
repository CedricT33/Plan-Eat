import { useEffect, useState } from "react";
import InputPersonnes from "./InputPersonnes";
import ListeInputsIngredients from "./ListeInputsIngredients";
import { recupererDonneesAvecType } from "../../services/StorageService";
import { dataConstantes } from "../../constants/AppConstantes";

export default function InputAjoutIngredients() {

    const [messagePasIngredient, setMessagePasIngredient] = useState(null);
    const [classeContainer, setClasseContainer] = useState(null);
    const [inputPersonnes, setInputPersonnes] = useState(null);

    function recupererIngredients() {
        return recupererDonneesAvecType(dataConstantes.CATEGORIES.INGREDIENTS);
    }

    function initialiserInputsIngredients() {
        const ingredients = recupererIngredients();
        if (ingredients?.length === 0) {
            setMessagePasIngredient(<div className="rouge">Veuillez ajouter des ingredients.</div>);
        }
        else {
            setMessagePasIngredient(null);
            setClasseContainer("show");
            setInputPersonnes(<InputPersonnes />);
        }        
    }

    useEffect(() => {
        initialiserInputsIngredients();
    }, [])

    return (
        <div id="saisieIngredients" className="container form-part">
            <h1>Ingrédients</h1>
            {messagePasIngredient}
            <div className={`saisie-ingredients-container ${classeContainer}`}>
                {inputPersonnes}
                <ListeInputsIngredients />
            </div>
        </div>
    );
}