import { useEffect, useState } from "react";
import InputIngredient from "./InputIngredient";

export default function ListeInputsIngredients({ingredients}) {

    const [listeInputsIngredients, setListeInputsIngredients] = useState([]);
    
    function onClicBoutonAjouterIngredient() {
        let listeIndex = [];
        listeInputsIngredients.forEach(input => {
            listeIndex.push(parseInt(input.key));
        });
        const indexSuivant = Math.max(...listeIndex) + 1;
        let listeCopie = Array.from(listeInputsIngredients);
        listeCopie.push(<InputIngredient id={indexSuivant} key={indexSuivant} />);
        setListeInputsIngredients(listeCopie);
    }

    function initialiserChamps() {
        if (ingredients) {
            let listeInputs = [];
            ingredients.forEach(ingredient => {
                listeInputs.push(<InputIngredient id={ingredient.key} key={ingredient.key} ingredient={ingredient}/>)
            })
            setListeInputsIngredients(listeInputs);
        }
    }

    useEffect(() => {
    }, [listeInputsIngredients])

    useEffect(() => {
        initialiserChamps();
    }, [ingredients])

    return (
        <div>
            <div>
                {listeInputsIngredients}
            </div>
            <div className="bouton-ajout" onClick={onClicBoutonAjouterIngredient}>
                <div>+ Ajouter un ingredient</div>
            </div>
        </div>
    );
}