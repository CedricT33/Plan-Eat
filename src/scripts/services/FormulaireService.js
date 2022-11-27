import { dataConstantes } from "../constants/AppConstantes";
import { enregistrerLocalStorage } from "../services/StorageService";
import { recupererIngredientAvecKey,
            calculerCaloriesRecette,
            calculerPrixRecette,
            arrondirQuantiteIngredient } from "../services/RecetteUtil";
import { recupererDateAujourdhui } from "../services/Util";

    //////////////////////////////////////////////////
    ///////////// FONCTIONS PRIVEES //////////////////
    //////////////////////////////////////////////////

function rechercherElmtRequiredVide(elmtAVerifier) {
    const elmtRequiredVide = [...elmtAVerifier].find(elmt => {
        return elmt?.attributes?.requis?.value === "true" && elmt.value === "";
    })

    return elmtRequiredVide;
}

function gererErreurs(elementsAVerifier) {
    const elmtRequiredVide = rechercherElmtRequiredVide(elementsAVerifier);
    
    if (elmtRequiredVide !== undefined) {
        elementsAVerifier.forEach(elmt => {
            elmt.parentNode.parentNode.classList.remove("error");
        })
        elmtRequiredVide.parentNode.parentNode.classList.add("error");
    }
}

function verifierFormulaire(listeElmtsSaisies) {
    const elmtRequiredVide = rechercherElmtRequiredVide(listeElmtsSaisies);

    return elmtRequiredVide === undefined;
}

function enregistrerDonneesFormulaire(type, listeElmtsSaisies, index) {
    const saisiesFormulaire = {};
    const donneesAEregistrer = {};
    let continuerParcours = true;

    listeElmtsSaisies.forEach(elmt => {
        if (elmt.name === "calories") {
            const valeur = elmt.value === "" ? 0 : parseFloat(elmt.value);
            saisiesFormulaire[elmt.name] = {valeur: valeur , unite: "cal"};
        }
        else if (elmt.name === "prix_moyen") {
            const valeur = elmt.value === "" ? 0 : parseFloat(elmt.value);
            saisiesFormulaire[elmt.name] = {valeur: valeur , unite: "€"};
        }
        else if (elmt.name === "poids") {
            saisiesFormulaire[elmt.name] = {valeur: parseInt(elmt.value) , unite: "gr"};
        }
        else if (elmt.name === "personnes") {
            const valeur = elmt.value === "" ? 0 : parseInt(elmt.value);
            saisiesFormulaire[elmt.name] = {valeur: valeur , unite: "pers"};
        }
        else if (elmt.name === "temps_preparation") {
            const valeur = elmt.value === "" ? 0 : parseInt(elmt.value);
            saisiesFormulaire[elmt.name] = {valeur: valeur};
        }
        else if (elmt.name === "unite_quantite") {
            const raccourci = elmt.attributes.clef.value === "null" ? null : elmt.attributes.clef.value;
            saisiesFormulaire[elmt.name] = {valeur: elmt.value, raccourci: raccourci};
        }
        else if (elmt.name === "unite_temps") {
            saisiesFormulaire["temps_preparation"].unite = elmt.value;
        }
        else if (elmt.name === "photo") {
            saisiesFormulaire[elmt.name] = elmt.innerText;
        }
        else if (elmt.name === "ingredient") {
            const clefIngredient = parseInt(elmt.attributes.clef.value);
            const ingredient = recupererIngredientAvecKey(clefIngredient);
            if (saisiesFormulaire["ingredients"]) {
                saisiesFormulaire["ingredients"].push(ingredient);
            }
            else {
                saisiesFormulaire["ingredients"] = [];
                saisiesFormulaire["ingredients"].push(ingredient);
            }
        }
        else if (elmt.name === "quantite") {
            const clefQuantite = parseInt(elmt.attributes.clef.value);
            saisiesFormulaire["ingredients"]?.forEach(ingredient => {
                if (ingredient.key === clefQuantite) {
                    ingredient.quantite = parseFloat(elmt.value).toFixed(2);
                }
            })
        }
        else if (elmt.name === "etape") {
            if (saisiesFormulaire["etapes"]) {
                saisiesFormulaire["etapes"].push(elmt.value);
            }
            else {
                saisiesFormulaire["etapes"] = [];
                saisiesFormulaire["etapes"].push(elmt.value);
            }
        }
        else {
            saisiesFormulaire[elmt.name] = elmt.value.toLowerCase();
        }
    })

    if (type === dataConstantes.CATEGORIES.RECETTES) {
        saisiesFormulaire.calories = calculerCaloriesRecette(saisiesFormulaire);
        saisiesFormulaire.prix_moyen = calculerPrixRecette(saisiesFormulaire);
        saisiesFormulaire.date = recupererDateAujourdhui();
        if (!saisiesFormulaire.ingredients) {
            console.log("pas ingredients");
            continuerParcours = false;
        }
        else {
            saisiesFormulaire.ingredients.forEach(ingredient => {
                ingredient.quantite = arrondirQuantiteIngredient(ingredient);
            })
        }
    }

    if (continuerParcours) {
        donneesAEregistrer[type] = saisiesFormulaire;
        if (index) {
            donneesAEregistrer[type].key = index;
        }
        enregistrerLocalStorage(donneesAEregistrer);
    }

    return continuerParcours;
}

    //////////////////////////////////////////////////
    ///////////// FONCTIONS PUBLIQUES ////////////////
    //////////////////////////////////////////////////

/**
 * Fonction qui vérifie et enregistre les données du formulaire.
 * @param {string} type le type de donnee à enregistrer
 */
export function onClickOKFormulaire(type, index) {
    const listeElmtsSaisies = document.querySelectorAll(".form-part .saisie");
    const isFormulaireOK = verifierFormulaire(listeElmtsSaisies);

    if (isFormulaireOK) {
        const isIngredientDansRecette = enregistrerDonneesFormulaire(type, listeElmtsSaisies, index);
        if (isIngredientDansRecette) {
            window.history.back();
        }
    }
    else {
        gererErreurs(listeElmtsSaisies);
    }
}