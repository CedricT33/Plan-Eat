import { useEffect } from "react";
import TextAreaPerso from "./atomes/TextAreaPerso";

export default function InputInstruction({id, etape, listeInputsInstructions, setListeInputsInstructions}) {

    function suppressionInputInstruction() {
        listeInputsInstructions?.forEach((input, i) => {
            if (input.props.id === id) {
                listeInputsInstructions.splice(i, 1)
            }
        });
        if (setListeInputsInstructions) {
            setListeInputsInstructions(listeInputsInstructions);
        }
    }
    
    function onClickCroix() {
        suppressionInputInstruction();
    }

    function initialiserChamp() {
        if (etape) {
            const elmtTextAreaEtape = document.getElementById("saisieInstruction" + id + "_input");
            elmtTextAreaEtape.value = etape;
        }
    }

    useEffect(() => {
        initialiserChamp();
    }, [etape])

    return (
        <div className="ajout_instruction_item">
            <TextAreaPerso
                id={`saisieInstruction${id}`}
                placeholder={`Etape ${id}`}
                name="etape"
                required/>

            <div className="icone croix" onClick={onClickCroix}></div>
        </div>
    );
}