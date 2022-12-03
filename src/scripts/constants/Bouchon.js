export const bouchon = {
    ingredients: [
        {
            key: 1,
            produit: "poulet",
            icone: "poulet",
            unite_quantite: "gr",
            rayon: "viandes et poissons",
            calories: {
                valeur: 35,
                unite: "Kcal"
            },
            prix_moyen: {
                valeur: 10.75,
                unite: "€"
            },
        },
        {
            key: 2,
            produit: "curry",
            icone: "epice-farine",
            unite_quantite: "cas",
            rayon: "herbes et épices",
            calories: {
                valeur: 2,
                unite: "Kcal"
            },
            prix_moyen: {
                valeur: 105.00,
                unite: "€"
            },
        },
        {
            key: 3,
            produit: "steak de boeuf",
            icone: "boeuf",
            unite_quantite: null,
            rayon: "viandes et poissons",
            calories: {
                valeur: 50,
                unite: "Kcal"
            },
            prix_moyen: {
                valeur: 35.99,
                unite: "€"
            },
        }
    ],
    recettes: [
        {
            key: 1,
            date: "13/11/2022",
            titre: "Poulet au curry",
            temps_preparation: {
                valeur: 10,
                unite: "min"
            },
            personnes: {
                valeur: 3,
                unite: "pers"
            },
            prix_moyen: {
                valeur: 15.75,
                unite: "€"
            },
            calories: {
                valeur: 188,
                unite: "Kcal"
            },
            saison: "automne",
            ingredients: [
                {
                    key: 1,
                    produit: "poulet",
                    quantite: "500",
                    unite_quantite: "g"
                },
                {
                    key: 2,
                    produit: "curry",
                    quantite: "1",
                    unite_quantite: "cas"
                },
                {
                    key: 3,
                    produit: "choux",
                    quantite: "1",
                    unite_quantite: null
                },
                {
                    key: 4,
                    produit: "lait de coco",
                    quantite: "200",
                    unite_quantite: "ml"
                },
            ],
            etapes: [
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ]
        },
        {
            key: 2,
            date: "13/11/2022",
            titre: "Poulet Massala",
            temps_preparation: {
                valeur: 15,
                unite: "min"
            },
            personnes: {
                valeur: 2,
                unite: "pers"
            },
            prix_moyen: {
                valeur: 17.75,
                unite: "€"
            },
            calories: {
                valeur: 195,
                unite: "Kcal"
            },
            saison: "toùtes-säisons",
            ingredients: [
                {
                    key: 1,
                    produit: "poulet",
                    quantite: "500",
                    unite_quantite: "g"
                },
                {
                    key: 2,
                    produit: "curry",
                    quantite: "3",
                    unite_quantite: "cas"
                },
                {
                    key: 3,
                    produit: "oignon",
                    quantite: "3",
                    unite_quantite: null
                },
                {
                    key: 4,
                    produit: "lait de coco",
                    quantite: "500",
                    unite_quantite: "ml"
                },
            ],
            etapes: [
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ]
        },
        {
            key: 3,
            date: "13/11/2022",
            titre: "Poisson Toutou lait de coco",
            temps_preparation: {
                valeur: 35,
                unite: "min"
            },
            personnes: {
                valeur: 4,
                unite: "pers"
            },
            prix_moyen: {
                valeur: 35.99,
                unite: "€"
            },
            calories: {
                valeur: 3588,
                unite: "Kcal"
            },
            saison: "ete",
            ingredients: [
                {
                    key: 1,
                    produit: "poisson toutou",
                    quantite: "300",
                    unite_quantite: "g"
                },
                {
                    key: 2,
                    produit: "curry",
                    quantite: "10",
                    unite_quantite: "cas"
                },
                {
                    key: 3,
                    produit: "oignon",
                    quantite: "2",
                    unite_quantite: null
                },
                {
                    key: 4,
                    produit: "lait de coco",
                    quantite: "500",
                    unite_quantite: "ml"
                },
            ],
            etapes: [
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ]
        }
    ],
    agenda: [
        {
            annee: "2022",
            semaine: "01",
            dates: [
                {
                    jour: "lundi",
                    mois: "janvier",
                    numero: 1,
                    recettes: [
                        {
                            key: 3,
                            date: "13/11/2022",
                            titre: "Poisson Toutou lait de coco",
                            temps_preparation: {
                                valeur: 35,
                                unite: "min"
                            },
                            personnes: {
                                valeur: 4,
                                unite: "pers"
                            },
                            prix_moyen: {
                                valeur: 35.99,
                                unite: "€"
                            },
                            calories: {
                                valeur: 3588,
                                unite: "Kcal"
                            },
                            saison: "ete",
                            ingredients: [
                                {
                                    key: 1,
                                    produit: "poisson toutou",
                                    quantite: "300",
                                    unite_quantite: "g"
                                },
                                {
                                    key: 2,
                                    produit: "curry",
                                    quantite: "10",
                                    unite_quantite: "cas"
                                },
                                {
                                    key: 3,
                                    produit: "oignon",
                                    quantite: "2",
                                    unite_quantite: null
                                },
                                {
                                    key: 4,
                                    produit: "lait de coco",
                                    quantite: "500",
                                    unite_quantite: "ml"
                                },
                            ],
                            etapes: [
                                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                "Lorem ipsum agenda dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            ]
                        }
                    ]
                },
            ]
        },
        {}
    ]
}