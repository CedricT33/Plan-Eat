import { recupererDonneesAvecType,
    enregistrerLocalStorage,
    supprimerLocalStorage } from "./StorageService";
    import { recupererNumeroSemaine} from "../services/DateUtil";

let agenda = [];
const dateAujourdhui = new Date();
export let semaineActive = recupererNumeroSemaine(dateAujourdhui);
export let anneeActive = new Date().getFullYear();

export function modifierSemaineActive(semaine) {
    semaineActive = semaine;
}

export function modifierAnneeActive(annee) {
    anneeActive = annee;
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

function ajouterRecetteDansAgendaSiPossible(agendaDeLaSemaine, agendaDuJour, recette, setRecettesDuJour) {
    const isDejaRecette = verifierSiRecetteExiste(agendaDuJour, recette.key);
    if (!isDejaRecette) {
        agendaDuJour?.recettes?.push(recette);
        enregistrerLocalStorage({ agenda: agendaDeLaSemaine });
        if (setRecettesDuJour) {
            setRecettesDuJour(agendaDuJour.recettes); 
        }
    }
}

function recupererRecetteAvecIndex(index) {
    const recettes = recupererDonneesAvecType("recettes");
    return recettes?.find(recette => recette.key === index);
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
        if (element.dates.length === 0) {
            supprimerLocalStorage({ agenda: {key: element.key} });
        }
    })
}

export function recupererAgendaSemaine(annee, semaine) {
    agenda = recupererDonneesAvecType("agenda");
    return agenda?.find( element => (
        parseInt(element.annee) === annee)
        && parseInt(element.semaine) === semaine );
}

export function recupererAgendaDuJour(agendaDeLaSemaine, numeroJour, mois) {
    return agendaDeLaSemaine?.dates.find( element => (
        element.mois === mois && element.numero === numeroJour
    ));
}

export function ajouterRecetteDansAgenda(dateComplete, indexRecette, setRecettesDuJour) {
    const {jour, annee, semaine, date} = dateComplete;
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
        dates: [ajoutDate]
    }

    if (!agendaDeLaSemaine && recette) {
        enregistrerLocalStorage({ agenda: ajoutComplet });
        if (setRecettesDuJour) {
            setRecettesDuJour([recette]);
        }
    }
    else if (agendaDeLaSemaine && !agendaDuJour && recette) {
        agendaDeLaSemaine.dates.push(ajoutDate);
        enregistrerLocalStorage({ agenda: agendaDeLaSemaine });
        if (setRecettesDuJour) {
            setRecettesDuJour([recette]);
        }
    }
    else if (agendaDeLaSemaine && agendaDuJour && recette) {
        ajouterRecetteDansAgendaSiPossible(agendaDeLaSemaine, agendaDuJour, recette, setRecettesDuJour);   
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
        cleanerLocalStorageAgendaApresSuppression();
        setRecettesDuJour(agendaDuJour.recettes);
    }
}