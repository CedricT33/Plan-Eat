import { recupererDonneesAvecType,
    enregistrerLocalStorage,
    supprimerLocalStorage } from "./StorageService";
import { recupererNumeroSemaine } from "../services/DateUtil";
import { recupererCoursesSemaine,
    recupererIngredientsAAjouterAuxCourses, enregistrerCourses } from "./CoursesService";

let agenda = [];
const dateAujourdhui = new Date();
export let semaineActive = recupererNumeroSemaine(dateAujourdhui);
export let anneeActiveOngletSemaine = dateAujourdhui.getFullYear();
export let anneeActiveOngletMois = dateAujourdhui.getFullYear();
export let moisActif = dateAujourdhui.getMonth();
export let ongletAgendaActif = "Semaine";

export function modifierSemaineActive(semaine) {
    semaineActive = semaine;
}

export function modifierAnneeActiveOngletSemaine(annee) {
    anneeActiveOngletSemaine = annee;
}

export function modifierAnneeActiveOngletMois(annee) {
    anneeActiveOngletMois = annee;
}

export function modifierMoisActif(mois) {
    moisActif = mois;
}

export function modifierOngletAgendaActif(ongletActif) {
    ongletAgendaActif = ongletActif;
}

function verifierSiRecetteExiste(agendaDuJour, indexRecette) {
    let isDejaRecette = false;
    agendaDuJour?.recettes?.forEach(elmtRecette => {
        if (elmtRecette.key === indexRecette) {
            isDejaRecette = true;
        }
    })
    return isDejaRecette;
}

function verifierSiProduitExiste(agendaDeLaSemaine, produit) {
    let isDejaProduit = false;
    agendaDeLaSemaine?.produits?.forEach(produitExistant => {
        if (produitExistant.key === produit.key) {
            isDejaProduit = true;
        }
    })
    return isDejaProduit;
}

function genererCourses(agendaDeLaSemaine) {
    const annee = agendaDeLaSemaine.annee;
    const semaine = agendaDeLaSemaine.semaine;
    const coursesSemaine = recupererCoursesSemaine(annee, semaine);
    const ingredientsAAjouter = recupererIngredientsAAjouterAuxCourses(agendaDeLaSemaine);
    const coursesSemaineAAjouter = {
        annee: annee,
        semaine: semaine,
        ingredients: ingredientsAAjouter,
        produits: agendaDeLaSemaine.produits
    }
    if (coursesSemaine) {
        coursesSemaineAAjouter.key = coursesSemaine?.key;
        // coursesSemaineAAjouter.produits = coursesSemaine?.produits;
    }
    enregistrerCourses(coursesSemaineAAjouter);
}

function ajouterRecetteDansAgendaSiPossible(agendaDeLaSemaine, agendaDuJour, recette, setRecettesDuJour) {
    let isDejaRecette = false;
    if (agendaDuJour) {
        isDejaRecette = verifierSiRecetteExiste(agendaDuJour, recette.key);
    }
    if (!isDejaRecette) {
        agendaDuJour?.recettes?.push(recette);
        enregistrerLocalStorage({ agenda: agendaDeLaSemaine });
        if (setRecettesDuJour) {
            if (agendaDuJour?.recettes) {
                setRecettesDuJour(agendaDuJour?.recettes); 
            }
            else {
                setRecettesDuJour([recette]); 
            }
        }
        genererCourses(agendaDeLaSemaine);
    }
}

function ajouterProduitDansAgendaSiPossible(agendaDeLaSemaine, produit) {
    let isDejaProduit = false;
    if (produit) {
        isDejaProduit = verifierSiProduitExiste(agendaDeLaSemaine, produit);
    }
    if (!isDejaProduit) {
        if (produit) {
            agendaDeLaSemaine?.produits?.push(produit);
        }
        enregistrerLocalStorage({ agenda: agendaDeLaSemaine });
        genererCourses(agendaDeLaSemaine);
    }
    else {
        console.log('isDejaProduit', isDejaProduit)
    }
}

function recupererRecetteAvecIndex(index) {
    const recettes = recupererDonneesAvecType("recettes");
    return recettes?.find(recette => recette.key === index);
}

export function recupererProduitAvecIndex(index) {
    const produits = recupererDonneesAvecType("produits");
    return produits?.find(produit => produit.key === index);
}

function viderAgendaDuJourSiPasDeRecette(agendaDeLaSemaine, agendaDuJour) {
    if (agendaDuJour?.recettes?.length === 0) {
        agendaDeLaSemaine?.dates?.forEach((date, id) => {
            if (date.mois === agendaDuJour.mois && date.numero === agendaDuJour.numero) {
                agendaDeLaSemaine.dates.splice(id,1);
            }
        })
    }
}

function cleanerLocalStorageAgendaApresSuppression() {
    agenda?.forEach(element => {
        if (element.dates.length === 0 && element.produits.length === 0) {
            supprimerLocalStorage({ agenda: {key: element.key} });
        }
    })
}

export function recupererAgendaSemaine(annee, semaine, _agenda) {
    agenda = _agenda ? _agenda : recupererDonneesAvecType("agenda");
    return agenda?.find( element => (
        parseInt(element.annee) === annee)
        && parseInt(element.semaine) === semaine );
}

export function recupererAgendaDuJour(agendaDeLaSemaine, numeroJour) {
    return agendaDeLaSemaine?.dates?.find( element => element.numero === numeroJour );
}

export function ajouterRecetteDansAgenda(dateComplete, indexRecette, setRecettesDuJour) {
    let {jour, annee, semaine, date} = dateComplete;
    const recette = recupererRecetteAvecIndex(indexRecette);
    const agendaDeLaSemaine = recupererAgendaSemaine(annee, semaine);
    const numeroJour = parseInt(date.split(" ")[0]);
    const mois = date.split(" ")[1];
    const agendaDuJour = recupererAgendaDuJour(agendaDeLaSemaine, numeroJour, mois);

    const ajoutDate = {
        jour: jour,
        mois: mois,
        numero: numeroJour,
        recettes: [recette]
    }

    const ajoutComplet = {
        annee: annee,
        semaine: semaine,
        dates: [ajoutDate],
        produits: []
    }

    if (!agendaDeLaSemaine && recette) {
        ajouterRecetteDansAgendaSiPossible(ajoutComplet, null, recette, setRecettesDuJour);  
    }
    else if (agendaDeLaSemaine && !agendaDuJour && recette) {
        agendaDeLaSemaine.dates.push(ajoutDate);
        ajouterRecetteDansAgendaSiPossible(agendaDeLaSemaine, null, recette, setRecettesDuJour);  
    }
    else if (agendaDeLaSemaine && agendaDuJour && recette) {
        ajouterRecetteDansAgendaSiPossible(agendaDeLaSemaine, agendaDuJour, recette, setRecettesDuJour);   
    }
}

export function ajouterProduitDansAgenda(numeroSemaine, numeroAnnee, produit) {
    const agendaDeLaSemaine = recupererAgendaSemaine(numeroAnnee, numeroSemaine);

    const ajoutComplet = {
        annee: numeroAnnee,
        semaine: numeroSemaine,
        dates: [],
        produits: [produit]
    }

    if (!agendaDeLaSemaine && produit) {
        ajouterProduitDansAgendaSiPossible(ajoutComplet);  
    }
    else if (agendaDeLaSemaine && produit) {
        ajouterProduitDansAgendaSiPossible(agendaDeLaSemaine, produit);  
    }

}

export function supprimerRecetteAgenda(id, dateComplete, setRecettesDuJour) {
    const idElmts = id.split("_");
    const numeroJour = parseInt(idElmts[0]);
    const mois = idElmts[1];
    const keyRecette = parseInt(idElmts[2]);
    const {semaine, annee} = dateComplete;
    const agendaDeLaSemaine = recupererAgendaSemaine(annee, semaine);
    const agendaDuJour = recupererAgendaDuJour(agendaDeLaSemaine, numeroJour, mois);
    const isRecetteExiste = verifierSiRecetteExiste(agendaDuJour, keyRecette);

    if (isRecetteExiste) {
        agendaDuJour?.recettes?.forEach((recette, id) => {
            if (recette.key === keyRecette) {
                agendaDuJour.recettes.splice(id, 1);
            }
        })
        viderAgendaDuJourSiPasDeRecette(agendaDeLaSemaine, agendaDuJour);
        enregistrerLocalStorage({ agenda: agendaDeLaSemaine });
        genererCourses(agendaDeLaSemaine);
        cleanerLocalStorageAgendaApresSuppression();
        setRecettesDuJour(agendaDuJour.recettes);
    }
}

export function supprimerProduitAgenda(indexProduit, semaine, annee) {
    const agendaDeLaSemaine = recupererAgendaSemaine(annee, semaine);


    agendaDeLaSemaine?.produits?.forEach((produit, id) => {
        if (produit.key === indexProduit) {
            agendaDeLaSemaine.produits.splice(id, 1);
        }
    })
    enregistrerLocalStorage({ agenda: agendaDeLaSemaine });
    genererCourses(agendaDeLaSemaine);
    cleanerLocalStorageAgendaApresSuppression();
}