import SelectPerso from "./atomes/SelectPerso";
import InputPerso from "./atomes/InputPerso";
import { unitesTemps } from "../../constants/DonneesConstantes";

export default function InputTempsPreparation({value}) {

    const listeUnite = unitesTemps.map(unite => { return {nom: unite} });

    return (
        <div id="saisiePreparation" className="container form-part">
            <label htmlFor="saisiePreparation_input">Préparation</label>
            <div>
                <InputPerso
                    id="saisiePreparation"
                    type="Number"
                    name="temps_preparation"
                    value={value}
                    placeholder="Temps de préparation"
                    max="5"
                    required/>

                <SelectPerso
                    liste={listeUnite}
                    id="saisieUniteTemps"
                    placeholder="Unité"
                    name="unite_temps"
                    required/>
            </div>
            <div className="erreur">Ce champs est obligatoire !</div>
        </div>
    );
}