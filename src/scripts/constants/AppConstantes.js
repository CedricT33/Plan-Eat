export const routesConstants = {
    DASHBOARD: "/Plan-Eat/dashboard",
    DETAIL_RECETTE: "/Plan-Eat/detail",
    INGREDIENTS: "/Plan-Eat/ingredients",
    INGREDIENT: "/Plan-Eat/ingredient",
    AGENDA: "/Plan-Eat/agenda",
    COURSES: "/Plan-Eat/courses",
    RECETTE: "/Plan-Eat/recette",
    CHOIX_PLAT: "/Plan-Eat/choix-plat",
    PARAMETRES: "/Plan-Eat/parametres"
}

export const pagesParams = [
    {
        pathname: routesConstants.DASHBOARD,
        titre: "PLAN' EAT !",
        isBoutonRetour: false,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstants.DETAIL_RECETTE,
        titre: "",
        isBoutonRetour: true,
        isBoutonModif: true,
        isBoutonSuppr: true,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstants.INGREDIENTS,
        titre: "INGRÉDIENTS",
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstants.INGREDIENT,
        titre: "NOUVEL INGRÉDIENT",
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstants.RECETTE,
        titre: "NOUVELLE RECETTE",
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstants.COURSES,
        titre: "LISTE DE COURSES",
        isBoutonRetour: false,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstants.AGENDA,
        titre: "AGENDA",
        isBoutonRetour: false,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstants.CHOIX_PLAT,
        titre: "CHOIX DE PLAT",
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstants.PARAMETRES,
        titre: "PARAMÈTRES",
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: false,
        isNavBar: false
    }
]