import { useLocation } from "react-router-dom";
import { dataConstantes } from "../constants/AppConstantes";
import { saisons } from "../constants/DonneesConstantes";
import InputMenu from "../components/formulaire/InputMenu";
import SelectMenu from "../components/formulaire/SelectMenu";
import InputTempsPreparation from "../components/formulaire/InputTempsPrepration";
import InputAjoutIngredients from "../components/formulaire/InputAjoutIngredients";
import InputAjoutInstructions from "../components/formulaire/InputAjoutInstructions";
import InputAjoutPhoto from "../components/formulaire/InputAjoutPhoto";
import BoutonOkFormulaire from "../components/formulaire/BoutonOkFormulaire";

export default function NouvelleRecette() {

    const params = useLocation();
    const recette = params?.state?.recette;

    const listeSaisons = saisons.map(saison => { return {nom: saison} });

    return (
        <div className="recette-container">
            <form id="formulaire-recette">

            <InputMenu 
                    id="saisieTitreRecette"
                    type="text"
                    label="Titre"
                    name="titre"
                    placeholder="Donnez un nom  votre recette"
                    maxLength="30"
                    required/>

            <InputTempsPreparation />

            <SelectMenu
                    id="saisieSaison"
                    liste={listeSaisons}
                    label="Plat de saison"
                    name="saison"
                    placeholder="Saison privilégiée du plat"
                    required/>

            <InputAjoutIngredients />

            <InputAjoutInstructions />

            <InputAjoutPhoto />
                
            </form>

            <BoutonOkFormulaire 
                label="ENREGISTRER"
                categorie={dataConstantes.CATEGORIES.RECETTES}
                key={recette?.key}/>
        </div>
    );
}