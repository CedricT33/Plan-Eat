import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SelectMenu from "../components/formulaire/SelectMenu";
import InputMenu from "../components/formulaire/InputMenu";
import { icones, rayonsIngredients, unites } from "../constants/DonneesConstantes";
import { dataConstantes } from "../constants/AppConstantes";
import BoutonOkFormulaire from "../components/formulaire/BoutonOkFormulaire";

export default function Ingredient() {

    const [unite, setUnite] = useState("gramme");
    const params = useLocation();
    const ingredient = params?.state?.ingredient;

    const listeIcones = icones.map(icone => { return {nom: icone, icone: icone} });
    const listeRayons = rayonsIngredients.map(rayon => { return {nom: rayon} });
    const listeUnites = unites.map(unite => { return {nom: unite.nom, raccourci: unite.raccourci} });
    

    function initialiserChamps() {
        const elmtUnite = document.getElementById("saisieUnite_input");

        elmtUnite.value = ingredient.unite_quantite.valeur;
        elmtUnite.attributes.clef.value = ingredient.unite_quantite.raccourci;
    }

    function initialiserChampPoids() {
        if (unite === "pièce") {
            const elmtPoids = document.getElementById("saisiePoids_input");
            elmtPoids.value = ingredient?.poids?.valeur;
        }
    }

    const champPoids = unite === "pièce" ?
        <InputMenu 
            id="saisiePoids"
            type={"number"}
            label={"Poids"}
            name={"poids"}
            placeholder={"000"}>
            <div>grammes pour une unité</div>
        </InputMenu>
        : null;

    useEffect(() => {
        if (ingredient) {
            setUnite(ingredient.unite_quantite?.valeur);
            initialiserChamps();
        }
    }, []);

    useEffect(() => {
        initialiserChampPoids();
    }, [unite]);


    return (
        <div className="ingredient-container">
            <form id="formulaire-ingredient">

                <InputMenu 
                    id="saisieIngredient"
                    type={"text"}
                    label={"Ingrédient"}
                    name={"produit"}
                    value={ingredient?.produit}
                    placeholder={"Nom de l'ingrédient"}
                    maxLength={"30"}
                    required/>

                <SelectMenu
                    id={"saisieIcone"}
                    liste={listeIcones}
                    label={"Icône"}
                    name={"icone"}
                    value={ingredient?.icone}
                    placeholder={"Exemple: poulet"}
                    required/>

                <SelectMenu
                    id={"saisieRayon"}
                    liste={listeRayons}
                    label={"Rayon"}
                    name={"rayon"}
                    value={ingredient?.rayon}
                    placeholder={"Exemple: viandes et poissons"}
                    required/>

                <SelectMenu
                    id={"saisieUnite"}
                    liste={listeUnites}
                    label={"Unité"}
                    name={"unite_quantite"}
                    placeholder={"Exemple: gramme"}
                    setData={setUnite}
                    required/>

                {champPoids}

                <InputMenu 
                    id="saisieCalories"
                    type={"number"}
                    label={"Calories"}
                    name={"calories"}
                    value={ingredient?.calories?.valeur}
                    placeholder={"0000"}>
                    <div>calories / 100 grammes</div>
                </InputMenu>

                <InputMenu 
                    id="saisiePrix"
                    type={"number"}
                    label={"Prix moyen"}
                    name={"prix_moyen"}
                    value={ingredient?.prix_moyen?.valeur}
                    placeholder={"00.00"}>
                    <div>€ / Kg</div>
                </InputMenu>
            </form>

            <BoutonOkFormulaire 
                label="ENREGISTRER"
                categorie={dataConstantes.CATEGORIES.INGREDIENTS}
                clef={ingredient?.key}/>
        </div>
    );
}