import { supprimerLocalStorage, recupererDonneesAvecType } from "../../services/StorageService";
import { dataConstantes } from "../../constants/AppConstantes";
import { touchStart, touchEnd } from "../../services/SwipeService";
import { mettrePremiereLettreEnMajuscule } from "../../services/Util";

export default function VignetteProduit({ produit, setProduits, setIndex }) {

    function supprimerProduit(key) {
        // TODO POPIN
        supprimerLocalStorage({ produits: {key: key} });
        setProduits(recupererDonneesAvecType(dataConstantes.CATEGORIES.PRODUITS));
    }

    function onClickSelectionnerProduit() {
        const elmtVignette = document.getElementById(produit.key);
        const listElementsVignettes = document.querySelectorAll(".vignette.actif");
        listElementsVignettes.forEach(vignette => {
            if (parseInt(vignette.id) !== produit.key) {
                vignette.classList.remove("actif");
            }
        });
        elmtVignette.classList.toggle("actif");
        if (elmtVignette.classList.contains("actif")) {
            setIndex(produit.key);
        }
        else {
            setIndex(null);
        }
    }

    const nomProduitAvecMajuscule = mettrePremiereLettreEnMajuscule(produit.produit);

    return (
        <li key={produit.key} id={produit.key} className="vignette"
            onTouchStart={e => touchStart(e)}
            onTouchEnd={e => touchEnd(e,produit.key)}>

            <div className="icone produits suppr" onClick={e => supprimerProduit(produit.key)}></div>

            <button onClick={onClickSelectionnerProduit}>
                <div className="infos">
                    <div>
                        <div className={`icone produit ${produit.icone}`}></div>
                        <div className="titre">{nomProduitAvecMajuscule}</div>
                    </div>
                </div>
            </button>
        </li>
    );
}