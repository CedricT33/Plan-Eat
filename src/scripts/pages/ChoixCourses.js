import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { recupererDonneesAvecType } from "../services/StorageService";
import { dataConstantes } from "../constants/AppConstantes";
import ListeVignettesProduits from "../components/courses/ListeVignettesProduits";
import BoutonOkChoixCourses from "../components/courses/BoutonOkChoixCourses";
import InputMenu from "../components/formulaire/InputMenu";
import BoutonSuppressionProduitCourses from "../components/courses/BoutonSuppressionProduitCourses";
import { verifierSiProduitExisteDansAgendaSemaine } from "../services/CoursesService";
import InputRecherche from "../components/formulaire/atomes/InputRecherche";

export default function ChoixCourses() {

    const params = useLocation();
    const semaine = params?.state?.semaine;
    const annee = parseInt(params?.state?.annee);
    const numeroSemaine = parseInt(semaine?.split(" ")[1]);

    const [produits, setProduits] = useState(recupererDonneesAvecType(dataConstantes.CATEGORIES.PRODUITS));
    const [indexProduit, setIndexProduit] = useState();
    const [indexProduitExistant, setIndexProduitExistant] = useState();
    const [rechercheValue, setRechercheValue] = useState("");

    const produitsFiltred = produits.filter(produit => {
        return produit.produit.toLowerCase().includes(rechercheValue.toLowerCase());
    })

    const classesPresentation = produits?.length === 0 ? "show" : null;
    const classesContainer = produits?.length === 0 ? null : "show";
    const classesFormulaire = indexProduitExistant || produitsFiltred.length === 0 ? null : "show";

    const affichageBoutonEnregistrer = indexProduitExistant || produitsFiltred.length === 0
        ? null
        : <BoutonOkChoixCourses label="ENREGISTRER" semaine={numeroSemaine} annee={annee}/>

    const affichageBoutonSupprimer = indexProduitExistant
    ? <BoutonSuppressionProduitCourses
        index={indexProduitExistant}
        setIndex={setIndexProduitExistant}
        semaine={numeroSemaine}
        annee={annee}/>
    : null

    const messageNoProduit = produitsFiltred.length === 0
        ? <div className="no-produit">Aucun produit ne correspond à votre recherche...</div>
        : null

    useEffect(() => {
        if (indexProduit) {
            const isProduitExistant = verifierSiProduitExisteDansAgendaSemaine(numeroSemaine, annee, indexProduit);
            if (isProduitExistant) {
                setIndexProduitExistant(indexProduit);
            }
            else {
                setIndexProduitExistant(null);
            }
        }
        else {
            setIndexProduitExistant(null);
        }
    }, [indexProduit])
    

    return (
        <div className="choix-courses-container">
            <div id="presentation-choix-courses" className={classesPresentation}>
                <div className="illustration-produits"></div>
                <div className="explications">
                    Cliquez sur le + pour créer les produits que vous souhaitez ajouter à la liste de courses...
                </div>
            </div>

            <div id="container-choix-courses" className={classesContainer}>
                
                <InputRecherche
                    setRechercheValue={setRechercheValue}
                    placeholder="recherche de produits..."/>

                {messageNoProduit}
                
                <ListeVignettesProduits
                    produits={produitsFiltred}
                    setProduits={setProduits}
                    setIndex={setIndexProduit}/>

                <form id="formulaire-choix-courses" className={classesFormulaire}>
                    <InputMenu 
                        id="saisieQuantite"
                        type="number"
                        label="Quantité"
                        name="quantite"
                        placeholder="Quantité à acheter"
                        required/>
                </form>

                {affichageBoutonEnregistrer}
                {affichageBoutonSupprimer}
            </div>
        </div>
    )
}
