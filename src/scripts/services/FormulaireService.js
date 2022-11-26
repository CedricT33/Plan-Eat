import { dataConstantes } from "../constants/AppConstantes";
import { enregistrerLocalStorage, recupererDonneesAvecType } from "../services/StorageService";

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

    function recupererIngredientAvecKey(clef) {
        const listeIngredients = recupererDonneesAvecType(dataConstantes.CATEGORIES.INGREDIENTS);
        return listeIngredients.find(ingredient => {
            return ingredient.key === clef;
        })
    }

    function calculerCaloriesRecette() {
        let calories = 0;
        saisiesFormulaire?.ingredients?.forEach(ingredient => {
            calories += ingredient.quantite * ingredient.calories.valeur;
        })
        saisiesFormulaire.calories = {valeur: calories, unite: "Kcal"};
    }

    function calculerPrixRecette() {
        let prix = 0;
        saisiesFormulaire?.ingredients?.forEach(ingredient => {
            prix += ingredient.quantite * ingredient.prix_moyen.valeur;
        })
        saisiesFormulaire.prix_moyen = {valeur: prix, unite: "€"};
    }

    listeElmtsSaisies.forEach(elmt => {
        if (elmt.name === "calories") {
            const valeur = elmt.value === "" ? 0 : parseInt(elmt.value);
            saisiesFormulaire[elmt.name] = {valeur: valeur , unite: "Kcal"};
        }
        else if (elmt.name === "prix_moyen") {
            const valeur = elmt.value === "" ? 0 : parseInt(elmt.value);
            saisiesFormulaire[elmt.name] = {valeur: valeur , unite: "€"};
        }
        else if (elmt.name === "personnes") {
            const valeur = elmt.value === "" ? 0 : parseInt(elmt.value);
            saisiesFormulaire[elmt.name] = {valeur: valeur , unite: "pers"};
        }
        else if (elmt.name === "temps_preparation") {
            const valeur = elmt.value === "" ? 0 : parseInt(elmt.value);
            saisiesFormulaire[elmt.name] = {valeur: valeur};
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
                    ingredient.quantite = parseInt(elmt.value);
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
        calculerCaloriesRecette();
        calculerPrixRecette();
        saisiesFormulaire.date = "25/11/2022";
        if (!saisiesFormulaire.ingredients) {
            console.log("pas ingredients")
            continuerParcours = false;
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