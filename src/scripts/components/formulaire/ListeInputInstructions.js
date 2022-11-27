import { useEffect, useState } from "react";
import InputInstruction from "./InputInstruction";


export default function ListeInputInstructions({etapes}) {

    const [listeInputsInstructions, setListeInputsInstructions] = useState([<InputInstruction id="1" key="1"/>]);
    
    function onClicBoutonAjouterIngredient() {
        let listeIndex = [];
        listeInputsInstructions.forEach(input => {
            listeIndex.push(parseInt(input.key));
        });
        const indexSuivant = Math.max(...listeIndex) + 1;
        let listeCopie = Array.from(listeInputsInstructions);
        listeCopie.push(<InputInstruction
            id={indexSuivant}
            key={indexSuivant}
            listeInputsInstructions={listeInputsInstructions}
            setListeInputsInstructions={setListeInputsInstructions} />);
        setListeInputsInstructions(listeCopie);
    }

    function initialiserChamps() {
        if (etapes) {
            let listeTextArea = [];
            etapes.forEach((etape, id) => {
                listeTextArea.push(<InputInstruction
                    id={id + 1}
                    key={id + 1}
                    etape={etape}
                    listeInputsInstructions={listeInputsInstructions}
                    setListeInputsInstructions={setListeInputsInstructions} />)
            })
            setListeInputsInstructions(listeTextArea);
        }
    }

    useEffect(() => {
    }, [listeInputsInstructions])

    useEffect(() => {
        initialiserChamps();
    }, [etapes])

    return (
        <div>
            <div>
                {listeInputsInstructions}
            </div>
            <div className="bouton-ajout" onClick={onClicBoutonAjouterIngredient}>
                <div>+ Ajouter une étape</div>
            </div>
        </div>
    );
}