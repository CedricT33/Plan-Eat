import { useEffect, useState } from "react";
import { dataConstantes } from "../constants/AppConstantes";
import { saisons } from "../constants/DonneesConstantes";
import InputMenu from "../components/formulaire/InputMenu";
import SelectMenu from "../components/formulaire/SelectMenu";
import InputTempsPreparation from "../components/formulaire/InputTempsPrepration";
import InputAjoutIngredients from "../components/formulaire/InputAjoutIngredients";
import InputAjoutInstructions from "../components/formulaire/InputAjoutInstructions";
import { useLocation } from "react-router-dom";
import InputAjoutPhoto from "../components/formulaire/InputAjoutPhoto";
import BoutonOkFormulaire from "../components/formulaire/BoutonOkFormulaire";
import { recupererDonneesAvecType } from "../services/StorageService";
import { base64toBlob, afficherImageDansRecette } from "../services/Util";

export default function NouvelleRecette() {

    const [ingredients, setIngredients] = useState(null);
    const [etapes, setEtapes] = useState(null);
    const [personnes, setPersonnes] = useState(null);
    const params = useLocation();
    const indexRecette = parseInt(params?.state?.index);
    const listeSaisons = saisons.map(saison => { return {nom: saison} });

    function initialiserChamps(recette) {
        const elmtTitre = document.getElementById("saisieTitreRecette_input");
        const elmtTpsPreparation = document.getElementById("saisiePreparation_input");
        const elmtUnitePreparation = document.getElementById("saisieUniteTemps_input");
        const elmtSaison = document.getElementById("saisieSaison_input");

        if (recette) {
            elmtTitre.value = recette.titre;
            elmtTpsPreparation.value = recette.temps_preparation?.valeur;
            elmtUnitePreparation.value = recette.temps_preparation?.unite;
            elmtSaison.value = recette.saison;
            const imageBlob = base64toBlob(recette.photo);
            afficherImageDansRecette(imageBlob);
            setIngredients(recette.ingredients);
            setPersonnes(recette.personnes?.valeur);
            setEtapes(recette.etapes);
        }
    }

    function recupererRecetteAvecIndex(index) {
        if (index) {
            const recettes = recupererDonneesAvecType(dataConstantes.CATEGORIES.RECETTES);
            const recetteRecuperee = recettes.find(recette => {
                return recette.key === index;
            })
            initialiserChamps(recetteRecuperee);
        }
    }

    useEffect(() => {
        recupererRecetteAvecIndex(indexRecette);
    }, []);

    return (
        <div className="recette-container">
            <form id="formulaire-recette">

            <InputMenu 
                    id="saisieTitreRecette"
                    type="text"
                    label="Titre"
                    name="titre"
                    placeholder="Donnez un nom à votre recette"
                    maxLength="30"
                    required/>

            <InputTempsPreparation />

            <SelectMenu
                    id="saisieSaison"
                    liste={listeSaisons}
                    value="toutes-saisons"
                    label="Plat de saison"
                    name="saison"
                    placeholder="Saison privilégiée du plat"
                    required/>

            <InputAjoutIngredients ingredients={ingredients} personnes={personnes}/>

            <InputAjoutInstructions etapes={etapes}/>

            <InputAjoutPhoto />
                
            </form>

            <BoutonOkFormulaire 
                label="ENREGISTRER"
                categorie={dataConstantes.CATEGORIES.RECETTES}
                clef={indexRecette}/>
        </div>
    );
}