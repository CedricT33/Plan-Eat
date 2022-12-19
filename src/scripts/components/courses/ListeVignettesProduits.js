import VignetteProduit from "./VignetteProduit";
import { rayonsProduits } from "../../constants/DonneesConstantes";
import { mettrePremiereLettreEnMajuscule } from "../../services/Util";

export default function ListeVignettesProduits({produits, setProduits, setIndex}) {

    let listeVignettesCategories = rayonsProduits.map((rayon, i) => {

        const rayonAvecMajuscule = mettrePremiereLettreEnMajuscule(rayon);
        const produitsCategorie = produits?.filter(produit => produit?.rayon === rayon);
        const listeProduitsCategorie = produitsCategorie?.map(produit => {
            return <VignetteProduit
                        key={produit.key}
                        produit={produit}
                        setProduits={setProduits}
                        setIndex={setIndex}/>
        })

        if (produitsCategorie?.length === 0) {
            return null;
        }

        return (
            <li key={i}>
                <h1>{rayonAvecMajuscule}</h1>
                <ul>{listeProduitsCategorie}</ul>
            </li>
        );
    })

    return (
        <div id="vignettes-produits">
            <ul>
                {listeVignettesCategories}
            </ul>
        </div>
    );
}