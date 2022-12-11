export function calculerTempsPreparation(recette) {
    if (recette.temps_preparation.unite === "min") {
        if (recette.temps_preparation.valeur > 60) {
            const tempsDivisePar60 = recette.temps_preparation.valeur / 60;
            const heures = Math.trunc(tempsDivisePar60);
            const heuresDecimales = tempsDivisePar60.toString().split(".")[1];
            if (heuresDecimales) {
                const minutes = Math.round(("0." + heuresDecimales)*60);    
                const minutesFormated = minutes < 10 ? "0" + minutes : minutes;
                return heures + " h " + minutesFormated;
            }
            return heures + " h";
        }
    }
    return recette.temps_preparation.valeur + " " + recette.temps_preparation.unite
}