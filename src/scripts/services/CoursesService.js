import { recupererNumeroSemaine,
    recupererNumeroSemainePrecedente, recupererNumeroSemaineSuivante } from "./DateUtil";
import { recupererDonneesAvecType, enregistrerLocalStorage } from "./StorageService";
import { ajouterProduitDansAgenda, recupererProduitAvecIndex,
    recupererAgendaSemaine, supprimerProduitAgenda } from "./AgendaService";

// CACHE DE LA DONNEE "COURSES"
let courses = null;

const listeSemaineEtAnnee = recupererListeSemainesCourses();
const listeSemaines = recupererListeSemainesPourSelect(listeSemaineEtAnnee);
export let semaineActiveCourses = listeSemaines[1].nom;
export let anneeActiveCourses = new Date().getFullYear();

export function modifierSemaineCoursesActive(semaine) {
    semaineActiveCourses = semaine;
}

export function modifierAnneeCoursesActive(annee) {
    anneeActiveCourses = annee;
}

export function enregistrerCourses(coursesSemaineAEnregistrer, semaine, annee) {
    if (coursesSemaineAEnregistrer) {
        enregistrerLocalStorage({ courses: coursesSemaineAEnregistrer });
        courses = recupererDonneesAvecType("courses");
    }
    else {
        if (semaine && annee) {
            const coursesSemaine = recupererCoursesSemaine(annee, semaine);
            enregistrerLocalStorage({ courses: coursesSemaine });
        }
    }
}

export function recupererCourses() {
    let coursesLocalStorage;
    if (courses) {
        return courses;
    }
    coursesLocalStorage = recupererDonneesAvecType("courses");

    if (coursesLocalStorage) {
        return coursesLocalStorage;
    }
    return [];
}

export function recupererListeSemainesPourSelect(listeSemaineEtAnnee) {
    let listeSemaines = [];
    if (listeSemaineEtAnnee) {
        listeSemaineEtAnnee.forEach(elmt => {
            listeSemaines.push({nom: "Semaine " + elmt.semaine})
        })
    }
    return listeSemaines;
}

export function recupererListeSemainesCourses() {
    const dateAujourdhui = new Date();
    const semaineInitiale = recupererNumeroSemaine(dateAujourdhui);
    const semainePrecedente = recupererNumeroSemainePrecedente(dateAujourdhui);

    return [
            {
                semaine: semainePrecedente,
                annee: recupererNumeroSemaine(dateAujourdhui) < recupererNumeroSemainePrecedente(dateAujourdhui)
                    ? dateAujourdhui.getFullYear() - 1 : dateAujourdhui.getFullYear()
            },
            {
                semaine: semaineInitiale,
                annee: dateAujourdhui.getFullYear()
            },
            {
                semaine: recupererNumeroSemaineSuivante(dateAujourdhui, 1),
                annee: recupererNumeroSemaine(dateAujourdhui) > recupererNumeroSemaineSuivante(dateAujourdhui, 1)
                    ? dateAujourdhui.getFullYear() + 1 : dateAujourdhui.getFullYear()
            },
            {
                semaine: recupererNumeroSemaineSuivante(dateAujourdhui, 2),
                annee: recupererNumeroSemaine(dateAujourdhui) > recupererNumeroSemaineSuivante(dateAujourdhui, 2)
                    ? dateAujourdhui.getFullYear() + 1 : dateAujourdhui.getFullYear()
            }
        ]
}

export function recupererCoursesSemaine(annee, semaine) {
    courses = recupererCourses();
    return courses?.find( element => (
        parseInt(element.annee) === annee)
        && parseInt(element.semaine) === semaine );
}

export function recupererIngredientsAAjouterAuxCourses(agendaDeLaSemaine) {
    const ingredientsAAjouter = [];
    agendaDeLaSemaine?.dates?.forEach(date => {
        date?.recettes?.forEach(recette => {
            recette?.ingredients?.forEach(ingredient => {
                const ingredientExistant = ingredientsAAjouter.find(ingredientExistant => {
                    return ingredientExistant.key === ingredient.key;
                })

                if (ingredientExistant) {
                    ingredientExistant.quantite += ingredient?.quantite;
                }
                else {
                    ingredientsAAjouter.push(ingredient);
                }
            })
        })
    });
    return ingredientsAAjouter;
}

export function recupererCategoriesActiveCoursesSemaine(coursesSemaine) {
    const categories = [];
    
    coursesSemaine?.ingredients?.forEach(ingredient => {
        if (!ingredient.checked) {
            const categorieExistante = categories.find(categorie => categorie === ingredient.rayon);
            if (!categorieExistante) {
                categories.push(ingredient.rayon);
            }
        }
    })

    coursesSemaine?.produits?.forEach(produit => {
        if (!produit.checked) {
            const categorieExistante = categories.find(categorie => categorie === produit.rayon);
            if (!categorieExistante) {
                categories.push(produit.rayon);
            }
        }
    })

    return categories;
}

export function calculerElementsCoursesActifs(agendaSemaine) {
    let produitsDeLaSemaine = [];
    if (agendaSemaine?.ingredients && agendaSemaine?.produits) {
        produitsDeLaSemaine = [...agendaSemaine.ingredients, ...agendaSemaine.produits];
    }
    const ingredientsActifs = produitsDeLaSemaine.filter(ingredient => {
        return (ingredient.checked === undefined || ingredient.checked === false);
    })
    const texteElement = ingredientsActifs?.length === 0
        || ingredientsActifs?.length === 1
        || ingredientsActifs?.length === undefined ? " élément" : " éléments";
    return ingredientsActifs?.length
        ? ingredientsActifs.length + texteElement
        : 0 + texteElement;
}

export function recupererCoursesParCategorie(ingredients, categorie) {
    return ingredients.filter(ingredient => ingredient.rayon === categorie);
}

export function onClickOKChoixCourses(semaine, annee) {
    const elmtProduitSelected = document.querySelector(".vignette.actif");
    const elmtQuantiteProduit = document.querySelectorAll(".form-part .saisie")[0];
    const isFormulaireOK = elmtProduitSelected?.id && parseInt(elmtQuantiteProduit?.value) > 0;

    if (isFormulaireOK) {
        const indexProduit = parseInt(elmtProduitSelected.id);
        const produit = recupererProduitAvecIndex(indexProduit);
        if (produit) {
            produit.quantite = parseInt(elmtQuantiteProduit?.value);
        }
        ajouterProduitDansAgenda(semaine, annee, produit);
    }
    else {
        console.log('error');
    }
}

export function onClickSupprimerProduitCourses(indexProduit, semaine, annee, setIndex) {
    supprimerProduitAgenda(indexProduit, semaine, annee);
    setIndex(null);
}

export function verifierSiProduitExisteDansAgendaSemaine(numeroSemaine, annee, indexProduit) {
    const agendaSemaine = recupererAgendaSemaine(annee, numeroSemaine);
    const produitDansAgenda = agendaSemaine?.produits?.find(produit => produit.key === indexProduit);
    return produitDansAgenda !== undefined;
}