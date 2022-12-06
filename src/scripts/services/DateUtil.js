export const nomsMois = ["janvier", "fevrier", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "decembre"
];

const nomsJours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

function formaterDatePourVignetteJourAgenda(date) {
    return date.getDate() + " " + nomsMois[date.getMonth()];
}

function recupererDateLundiAvecNumeroSemaineEtAnnee(numeroSemaine, annee) {
    const simple = new Date(annee, 0, 1 + (numeroSemaine - 1) * 7);
    const dow = simple.getDay();
    let ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - dow + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - dow);
    return ISOweekStart;
}

function recupererJourPremierJanvier(annee) {
    const datePremierJanvier = new Date(annee, 0, 1);
    if (datePremierJanvier.getDay() === 0) {
        return nomsJours[6]
    }
    return nomsJours[datePremierJanvier.getDay() - 1];
}

function calculerAnneeBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

export function recupererNombreSemaines(annee) {
    const jourPremierJanvier = recupererJourPremierJanvier(annee);
    const isAnneeBissextile = calculerAnneeBissextile(annee);
    if (jourPremierJanvier === "jeudi"
        || (isAnneeBissextile && jourPremierJanvier === "mercredi")) {
            return 53;
    }
    else {
        return 52;
    }
}

export function recupererDateAujourdhuiFormateePourVignetteJourAgenda() {
    return formaterDatePourVignetteJourAgenda(new Date());
}

export function recupererDatesPourVignetteJourAgenda(numeroSemaine, annee) {
    const dateLundi = recupererDateLundiAvecNumeroSemaineEtAnnee(numeroSemaine, annee);
    let datesSemaine = {};
    for (let i = 0; i < 7; i++) {
        const dateJour = recupererDateJoursSuivants(dateLundi, i);
        datesSemaine[nomsJours[i]] = formaterDatePourVignetteJourAgenda(dateJour);
    }
    return datesSemaine;
}

export function recupererNumeroSemaine(dateAAnalser) {
    let date = new Date(dateAAnalser.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
}

export function recupererMois(dateAAnalser) {
    return nomsMois[dateAAnalser.getMonth()];
}

export function recupererDateJoursPrecedents(date, nombreJoursPrecedents) {
    return new Date(date.getTime() - (nombreJoursPrecedents * 86400 * 1000));
}

export function recupererDateJoursSuivants(date, nombreJoursSuivants) {
    return new Date(date.getTime() + (nombreJoursSuivants * 86400 * 1000));
}