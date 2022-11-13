import { enregistrerLocalStorage } from "../services/StorageService";

    //////////////////////////////////////////////////
    ///////////// FONCTIONS PRIVEES //////////////////
    //////////////////////////////////////////////////

function gererErreurs(elementsAVerifier) {
    const elmtRequiredVide = [...elementsAVerifier].find(elmt => {
        return elmt.required && elmt.value === "";
    })
    
    if (elmtRequiredVide !== undefined) {
        elementsAVerifier.forEach(elmt => {
            elmt.parentNode.parentNode.classList.remove("error");
        })
        elmtRequiredVide.parentNode.parentNode.classList.add("error");
    }
}

function verifierFormulaire(listeElmtsSaisies) {
    const elmtRequiredVide = [...listeElmtsSaisies].find(elmt => {
        return elmt.required && elmt.value === "";
    })

    return elmtRequiredVide === undefined;
}

function enregistrerDonneesFormulaire(type, listeElmtsSaisies, index) {
    const saisiesFormulaire = {};
    const donneesAEregistrer = {};

    listeElmtsSaisies.forEach(elmt => {
        if (elmt.name === "calories") {
            const valeur = elmt.value === "" ? 0 : parseInt(elmt.value);
            saisiesFormulaire[elmt.name] = {valeur: valeur , unite: "Kcal"};
        }
        else if (elmt.name === "prix_moyen") {
            const valeur = elmt.value === "" ? 0 : parseInt(elmt.value);
            saisiesFormulaire[elmt.name] = {valeur: valeur , unite: "€"};
        }
        else {
            saisiesFormulaire[elmt.name] = elmt.value.toLowerCase();
        }
    })

    donneesAEregistrer[type] = saisiesFormulaire;

    if (index) {
        donneesAEregistrer[type].key = index;
    }

    enregistrerLocalStorage(donneesAEregistrer);
}

    //////////////////////////////////////////////////
    ///////////// FONCTIONS PUBLIQUES ////////////////
    //////////////////////////////////////////////////

/**
 * Fonction qui vérifie et enregistre les données du formulaire.
 * @param {string} type le type de donnee  enregistrer
 */
export function onClickOKFormulaire(type, index) {
    const listeElmtsSaisies = document.querySelectorAll(".form-part input");
    const isFormulaireOK = verifierFormulaire(listeElmtsSaisies);

    if (isFormulaireOK) {
        enregistrerDonneesFormulaire(type, listeElmtsSaisies, index);
        window.history.back();
    }
    else {
        gererErreurs(listeElmtsSaisies);
    }
}