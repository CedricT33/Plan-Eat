import { useEffect } from "react";
import InputPerso from "./atomes/InputPerso";

export default function InputPersonnes({personnes}) {

    function initialiserChamp() {
        if (personnes) {
            const elmtInputPersonnes = document.getElementById("saisiePersonnes_input");
            elmtInputPersonnes.value = personnes;
        }
    }

    useEffect(() => {
        initialiserChamp();
    }, [personnes])

    return (
        <>
        <div id="saisiePersonnes">
            <div>Quantité pour</div>

            <InputPerso
                id="saisiePersonnes"
                placeholder="00"
                name="personnes"
                max="2"
                type="Number"
                required/>

            <div>personne(s).</div>
        </div>
        <div className="erreur">Ce champs est obligatoire !</div>
        </>
    );
}