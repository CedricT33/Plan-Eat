import { useEffect, useState } from "react";
import { dataConstantes } from "../constants/AppConstantes";
import { saisons, categoriesRecettes } from "../constants/DonneesConstantes";
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

    const recettes = recupererDonneesAvecType(dataConstantes.CATEGORIES.RECETTES);
    const params = useLocation();
    const indexRecette = parseInt(params?.state?.index);

    const [ingredients, setIngredients] = useState(null);
    const [etapes, setEtapes] = useState(null);
    const [personnes, setPersonnes] = useState(null);
    const [recette] = useState(recettes.find(recette => {
        return recette.key === indexRecette;
    }));
    
    const listeSaisons = saisons.map(saison => { return {nom: saison} });

    function initialiserChamps(recette) {
        const elmtUnitePreparation = document.getElementById("saisieUniteTemps_input");

        if (recette) {
            elmtUnitePreparation.value = recette.temps_preparation?.unite;
            const imageBlob = base64toBlob(recette.photo);
            afficherImageDansRecette(imageBlob);
            setIngredients(recette.ingredients);
            setPersonnes(recette.personnes?.valeur);
            setEtapes(recette.etapes);
        }
    }

    function recupererRecetteAvecIndex() {
        if (indexRecette) {
            initialiserChamps(recette);
        }
    }

    useEffect(() => {
        recupererRecetteAvecIndex();
    }, []);

    return (
        <div className="recette-container">
            <form id="formulaire-recette">

                <InputMenu 
                    id="saisieTitreRecette"
                    type="text"
                    label="Titre"
                    name="titre"
                    value={recette?.titre}
                    placeholder="Donnez un nom à votre recette"
                    maxLength="30"
                    required/>

                <InputTempsPreparation value={recette?.temps_preparation?.valeur}/>

                <SelectMenu
                    id="saisieCategorie"
                    liste={categoriesRecettes}
                    value={recette?.categorie}
                    valueDefaut="plat principal"
                    label="Catégorie"
                    name="categorie"
                    placeholder="Catégorie du plat"
                    required/>

                <SelectMenu
                    id="saisieSaison"
                    liste={listeSaisons}
                    value={recette?.saison}
                    valueDefaut="toutes-saisons"
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