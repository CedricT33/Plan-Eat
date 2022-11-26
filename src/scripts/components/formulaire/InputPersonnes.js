import InputPerso from "./atomes/InputPerso";

export default function InputPersonnes() {

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