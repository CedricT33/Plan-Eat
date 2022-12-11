import { recupererNumeroSemaine,
    recupererNumeroSemainePrecedente, recupererNumeroSemaineSuivante } from "./DateUtil";
import { recupererDonneesAvecType, enregistrerLocalStorage } from "./StorageService";

// CACHE DE LA DONNEE "COURSES"
let courses = null;

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
    
    coursesSemaine?.ingredients.forEach(ingredient => {
        if (!ingredient.checked) {
            const categorieExistante = categories.find(categorie => categorie === ingredient.rayon);
            if (!categorieExistante) {
                categories.push(ingredient.rayon);
            }
        }
    })

    return categories;
}

export function calculerElementsCoursesActifs(agendaSemaine) {
    const ingredientsActifs = agendaSemaine?.ingredients?.filter(ingredient => {
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