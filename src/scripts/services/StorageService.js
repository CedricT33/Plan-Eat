import { genererIndexUnique } from "./Util";

    //////////////////////////////////////////////////
    ///////////////// CONSTANTES /////////////////////
    //////////////////////////////////////////////////

const STORAGE_KEY = "data_plan_eat";
let DONNEES = null;
const DONNEES_INIT = {
    ingredients: [],
    recettes: [],
    agenda: [],
    courses: [],
    produits: []
}


    //////////////////////////////////////////////////
    ///////////// FONCTIONS PRIVEES //////////////////
    //////////////////////////////////////////////////


function supprimerSiDejaPresent(listeDonnees, key) {
    if (typeof key === "string") {
        key = parseInt(key);
    }
    listeDonnees.forEach((donnee, id) => {
        if (donnee.key === key) {
            listeDonnees.splice(id, 1);
        }
    })
}

function recupererLocalStorage() {
    const donnees = localStorage.getItem(STORAGE_KEY);

    if (donnees) {
        DONNEES = JSON.parse(donnees);
    }
    else {
        DONNEES = JSON.parse(JSON.stringify(DONNEES_INIT));
    }

    return DONNEES;
}


    //////////////////////////////////////////////////
    ///////////// FONCTIONS PUBLIQUES ////////////////
    //////////////////////////////////////////////////


/**
 * Enregistre les données dans le local storage
 * @param {*} donneesAEnregistrer
 * (Si l'objet contient une key il y aura modification sinon il y aura création)
 * exemple : enregistrerLocalStorage({ ingredients: { toto: "toto", key: 1 } });
 */
export function enregistrerLocalStorage(donneesAEnregistrer) {
    const donneesLocales = recupererLocalStorage();

    for (const clefdonnee in donneesLocales) {
        if (clefdonnee === Object.keys(donneesAEnregistrer)[0]) {
            if (!donneesAEnregistrer[clefdonnee].key) {
                donneesAEnregistrer[clefdonnee].key = genererIndexUnique();
            }
            supprimerSiDejaPresent(donneesLocales[clefdonnee], donneesAEnregistrer[clefdonnee]?.key);
            donneesLocales[clefdonnee].push(donneesAEnregistrer[clefdonnee]);
        }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(donneesLocales));
}

/**
 * Supprime les données dans le local storage
 * @param {Object} donneesASupprimer
 * exemple : supprimerLocalStorage({ ingredients: {key: 1} });
 */
 export function supprimerLocalStorage(donneesASupprimer) {
    const donneesLocales = recupererLocalStorage();

    for (const clefdonnee in donneesLocales) {
        if (clefdonnee === Object.keys(donneesASupprimer)[0]) {
            supprimerSiDejaPresent(donneesLocales[clefdonnee], donneesASupprimer[clefdonnee]?.key);
        }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(donneesLocales));
}

/**
 * Recupere une donnée particuliere du local storage
 * @param {String} type par exemple "recettes"
 * @returns {Array} liste de données
 */
export function recupererDonneesAvecType(type) {
    recupererLocalStorage();
    return DONNEES[type];
}

/**
 * Suprimme toutes les données de l'app
 */
 export function supprimerToutLocalStorage() {
    localStorage.removeItem(STORAGE_KEY);
    setTimeout(() => {
        alert("Données supprimées");
    }, 100);
}