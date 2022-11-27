import { blobToBase64 } from "./Util";
import { recupererDonneesAvecType } from "./StorageService";
import { dataConstantes } from "../constants/AppConstantes";

export function afficherImageDansRecette(image) {
    const elmtAjouterPhoto = document.querySelector("#saisiePhoto .container-bouton");
    const elmtImage = document.getElementById("image-photo");
    const elmtInputPhoto = document.getElementById("input-photo");

    blobToBase64(image).then(imageB64 => {
        elmtInputPhoto.innerText = imageB64;
    });
    
    elmtAjouterPhoto.classList.remove("show");
    elmtImage.classList.add("show");
    const urlImage = URL.createObjectURL(image);
    elmtImage.src = urlImage;
}

export function recupererIngredientAvecKey(clef) {
    const listeIngredients = recupererDonneesAvecType(dataConstantes.CATEGORIES.INGREDIENTS);
    return listeIngredients.find(ingredient => {
        return ingredient.key === clef;
    })
}

export function arrondirQuantiteIngredient(ingredient) {
    return parseInt(ingredient.quantite);
}

export function calculerPrixRecette(recette) {
    let prix = 0;
    let poidsEnKilo = 0;
    recette?.ingredients?.forEach(ingredient => {
        if (ingredient.unite_quantite.valeur === "kilo"
            || ingredient.unite_quantite.valeur === "litre") {
            poidsEnKilo = ingredient.quantite;
        }
        if (ingredient.unite_quantite.valeur === "gramme") {
            poidsEnKilo = ingredient.quantite / 1000;
        }
        if (ingredient.unite_quantite.valeur === "pièce" && ingredient.poids) {
            poidsEnKilo = ingredient.quantite * ingredient.poids.valeur / 1000;
        }
        if (ingredient.unite_quantite.valeur === "cuillère à soupe") {
            poidsEnKilo = ingredient.quantite * 15 / 1000;
        }
        if (ingredient.unite_quantite.valeur === "cuillère à café") {
            poidsEnKilo = ingredient.quantite * 5 / 1000;
        }
        if (ingredient.unite_quantite.valeur === "centilitre") {
            poidsEnKilo = ingredient.quantite * 10 / 1000;
        }
        if (ingredient.unite_quantite.valeur === "décilitre") {
            poidsEnKilo = ingredient.quantite * 100 / 1000;
        }
        prix += poidsEnKilo * ingredient.prix_moyen.valeur;
    })
    return {valeur: prix.toFixed(2), unite: "€"};
}

export function calculerCaloriesRecette(recette) {
    let calories = 0;
    recette?.ingredients?.forEach(ingredient => {
        let caloriesIngredient = 0;
        if (ingredient.unite_quantite.valeur === "gramme") {
            caloriesIngredient = ingredient.calories.valeur / 100; 
        }
        if (ingredient.unite_quantite.valeur === "kilo") {
            caloriesIngredient = ingredient.calories.valeur * 10; 
        }
        if (ingredient.unite_quantite.valeur === "pièce" && ingredient.poids) {
            caloriesIngredient = ingredient.calories.valeur * (ingredient.poids.valeur / 100); 
        }
        calories += ingredient.quantite * caloriesIngredient;
    })
    calories /= 1000;
    return {valeur: calories.toFixed(2), unite: "Kcal"};
}

export function calculerCaloriesParPersonne(caloriesRecette, personnes) {
    let calories = 0
    if (caloriesRecette && personnes && personnes !== 0) {
        calories = caloriesRecette / personnes;
    }
    return calories.toFixed(2);
}