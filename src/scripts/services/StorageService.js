    //////////////////////////////////////////////////
    ///////////////// CONSTANTES /////////////////////
    //////////////////////////////////////////////////

const STORAGE_KEY = "data_plan_eat";
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
    listeDonnees.forEach((donnee, id) => {
        if (donnee.key === key) {
            listeDonnees.splice(id, 1);
        }
    })
}

function recupererLocalStorage() {
    const donnees = localStorage.getItem(STORAGE_KEY);

    if (donnees) {
        return JSON.parse(donnees);
    }
    else {
        return DONNEES_INIT;
    }
}

function recupererIndexMax(typeDonnee) {

    const donneesLocales = recupererLocalStorage();
    let tableauIndex = [];

    for (const clefdonnee in donneesLocales) {
        if (clefdonnee === typeDonnee) {
            donneesLocales[clefdonnee].forEach(donnee => {
                tableauIndex.push(donnee?.key);
            })
        }
    }

    if (tableauIndex.length !== 0) {
        return (Math.max(...tableauIndex) + 1);
    }
    else {
        return 1;
    }
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
                donneesAEnregistrer[clefdonnee].key = recupererIndexMax(clefdonnee);
            }
            supprimerSiDejaPresent(donneesLocales[clefdonnee], donneesAEnregistrer[clefdonnee]?.key);
            donneesLocales[clefdonnee].push(donneesAEnregistrer[clefdonnee]);
        }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(donneesLocales));
}

/**
 * Supprime les données dans le local storage
 * @param {*} donneesASupprimer
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