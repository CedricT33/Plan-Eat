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
        isHeaderTransparent: false,
        isBoutonRetour: false,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstants.DETAIL_RECETTE,
        titre: "",
        isHeaderTransparent: true,
        isBoutonRetour: true,
        isBoutonModif: true,
        isBoutonSuppr: true,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstants.INGREDIENTS,
        titre: "INGRÉDIENTS",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstants.INGREDIENT,
        titre: "NOUVEL INGRÉDIENT",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstants.RECETTE,
        titre: "NOUVELLE RECETTE",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstants.COURSES,
        titre: "LISTE DE COURSES",
        isHeaderTransparent: false,
        isBoutonRetour: false,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstants.AGENDA,
        titre: "AGENDA",
        isHeaderTransparent: false,
        isBoutonRetour: false,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: true
    },
    {
        pathname: routesConstants.CHOIX_PLAT,
        titre: "CHOIX DE PLAT",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: true,
        isNavBar: false
    },
    {
        pathname: routesConstants.PARAMETRES,
        titre: "PARAMÈTRES",
        isHeaderTransparent: false,
        isBoutonRetour: true,
        isBoutonModif: false,
        isBoutonSuppr: false,
        isBoutonParam: false,
        isNavBar: false
    }
]