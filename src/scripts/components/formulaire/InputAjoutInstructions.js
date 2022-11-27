import { useEffect } from "react";
import ListeInputInstructions from "./ListeInputInstructions";

export default function InputAjoutInstructions({etapes}) {

    useEffect(() => {
    }, [etapes])

    return (
        <div id="saisieInstructions" className="container form-part">
            <h1>Instructions</h1>
            <ListeInputInstructions etapes={etapes}/>
        </div>
    );
}