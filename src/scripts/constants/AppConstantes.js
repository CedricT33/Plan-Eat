export const routesConstantes = {
    DASHBOARD: "/Plan-Eat/dashboard",
    DETAIL_RECETTE: "/Plan-Eat/detail",
    INGREDIENTS: "/Plan-Eat/ingredients",
    INGREDIENT: "/Plan-Eat/ingredient",
    INGREDIENT_MODIF: "/Plan-Eat/ingredient-modif",
    AGENDA: "/Plan-Eat/agenda",
    COURSES: "/Plan-Eat/courses",
    RECETTE: "/Plan-Eat/recette",
    RECETTE_MODIF: "/Plan-Eat/recette-modif",
    CHOIX_PLAT: "/Plan-Eat/choix-plat",
    PARAMETRES: "/Plan-Eat/parametres",
    CHOIX_COURSES: "/Plan-Eat/choix-courses",
    AJOUT_PRODUIT: "/Plan-Eat/produit-ajout"
}

export const dataConstantes = {
    CATEGORIES: {
        INGREDIENTS: "ingredients",
        RECETTES: "recettes",
        PRODUITS: "produits",
        COURSES: "courses",
        AGENDA: "agenda"
    }
}

export const pagesParams = [
    {
        pathname: routesConstantes.DASHBOARD,
        titre: "PLAN' EAT !",
        isHeaderTransparent: false,
        isBoutonRetour: false,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstantes.DETAIL_RECETTE,
        titre: "",
        isHeaderTransparent: true,
        isBoutonRetour: true,
        isBoutonModif: true,
        isBoutonSuppr: true,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstantes.INGREDIENTS,
        titre: "INGRÉDIENTS",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstantes.INGREDIENT,
        titre: "NOUVEL INGRÉDIENT",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstantes.INGREDIENT_MODIF,
        titre: "MODIF INGRÉDIENT",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstantes.RECETTE,
        titre: "NOUVELLE RECETTE",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstantes.RECETTE_MODIF,
        titre: "MODIF RECETTE",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstantes.COURSES,
        titre: "LISTE DE COURSES",
        isHeaderTransparent: false,
        isBoutonRetour: false,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstantes.AGENDA,
        titre: "AGENDA",
        isHeaderTransparent: false,
        isBoutonRetour: false,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstantes.CHOIX_PLAT,
        titre: "CHOIX DE PLAT",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstantes.PARAMETRES,
        titre: "PARAMÈTRES",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: false,
        isNavBar: false
    },
    {
        pathname: routesConstantes.CHOIX_COURSES,
        titre: "CHOIX COURSES",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstantes.AJOUT_PRODUIT,
        titre: "AJOUT PRODUIT",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    }
]