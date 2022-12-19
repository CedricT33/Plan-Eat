import InputMenu from "../components/formulaire/InputMenu";
import SelectMenu from "../components/formulaire/SelectMenu";
import { rayonsProduits, iconesProduits } from "../constants/DonneesConstantes";
import BoutonOkFormulaire from "../components/formulaire/BoutonOkFormulaire";
import { dataConstantes } from "../constants/AppConstantes";

export default function AjoutProduit() {

    const listeRayons = rayonsProduits.map(rayon => { return {nom: rayon} });
    const listeIcones = iconesProduits.map(icone => { return {nom: icone, icone: icone} });

    return (
        <div className="ajout-produit-container">
            <form id="formulaire-produit">

                <InputMenu 
                    id="saisieNomProduit"
                    type="text"
                    label="Produit"
                    name="produit"
                    placeholder="Nom du produit"
                    maxLength="30"
                    required/>
                
                <SelectMenu
                    id="saisieRayonProduit"
                    liste={listeRayons}
                    label="Rayon"
                    name="rayon"
                    placeholder="exemple: hygiène et beauté"
                    required/>

                <SelectMenu
                    id="saisieIconeProduit"
                    liste={listeIcones}
                    label="Icône"
                    name="icone"
                    placeholder="exemple: shampoing"
                    required/>

            </form>

            <BoutonOkFormulaire 
                label="ENREGISTRER"
                categorie={dataConstantes.CATEGORIES.PRODUITS} />
        </div>
    )
}
