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

export function genererRecettesFiltred(filtres, listeRecettes, setRecettes) {
    const recettesFiltred = listeRecettes.filter(recette => {
        let isRecetteTrouvee = false;
        filtres.forEach(filtre => {
            if (filtre.typeDeTri === undefined || filtre.typeDeTri === "") {
                console.warn("[ATTENTION] -> le type de tri n'est pas défini dans le filtre !");
            }
            else {
                const typesDeTri = filtre.typeDeTri.split(".");
                filtre.tri.forEach(elmt => {
                    if (typesDeTri.length === 1) {
                        if (recette[typesDeTri[0]]?.includes(elmt)) {
                            isRecetteTrouvee = true;
                        }
                    }
                    else if (typesDeTri.length === 2) {
                        if (!Array.isArray(recette[typesDeTri[0]])) {
                            if (recette[typesDeTri[0]][typesDeTri[1]] === elmt) {
                                isRecetteTrouvee = true;
                            }
                        }
                        else {
                            recette[typesDeTri[0]].forEach(recetteType1 => {
                                if (recetteType1[typesDeTri[1]] === elmt) {
                                    isRecetteTrouvee = true;
                                }
                            })
                        }
                    }
                    else if (typesDeTri.length === 3) {
                        if (!Array.isArray(recette[typesDeTri[0]])) {
                            console.log('recette[typesDeTri[0]] : ', typeof recette[typesDeTri[0]])
                            if (!Array.isArray(recette[typesDeTri[0]][typesDeTri[1]])) {
                                if (recette[typesDeTri[0]][typesDeTri[1]][typesDeTri[2]] === elmt) {
                                    isRecetteTrouvee = true;
                                }
                            }
                            else {
                                recette[typesDeTri[0]][typesDeTri[1]].forEach(recetteType2 => {
                                    if (recetteType2[typesDeTri[2]] === elmt) {
                                        isRecetteTrouvee = true;
                                    }
                                })
                            }
                        }
                        else {
                            recette[typesDeTri[0]].forEach(recetteType1 => {
                                if (!Array.isArray(recetteType1[typesDeTri[1]])) {
                                    if (recetteType1[typesDeTri[1]][typesDeTri[2]] === elmt) {
                                        isRecetteTrouvee = true;
                                    }
                                }
                                else {
                                    recetteType1[typesDeTri[1]].forEach(recetteType2 => {
                                        if (recetteType2[typesDeTri[2]] === elmt) {
                                            isRecetteTrouvee = true;
                                        }
                                    })
                                }
                            })
                        }
                    }
                    else {
                        console.warn("[ATTENTION] -> le type de tri dans le filtre excède 3 éléments !");
                    }
                })
            }
        });
        return isRecetteTrouvee;
    })

    if (filtres.length !== 0) {
        setRecettes(recettesFiltred);
    }
    else {
        setRecettes(listeRecettes);
    }
}