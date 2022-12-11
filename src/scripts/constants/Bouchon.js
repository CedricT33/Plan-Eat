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
            semaine: "48",
            dates: [
                {
                    jour: "samedi",
                    mois: "decembre",
                    numero: 3,
                    recettes: [
                        {
                            key: 3,
                            date: "13/11/2022",
                            titre: "Poisson Toutou lait de coco",
                            photo: "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",
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
                        },
                        {
                            key: 4,
                            date: "15/11/2022",
                            titre: "Test recette",
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
    ],
    courses: [
        {
            annee: 2022,
            semaine: 49,
            ingredients: [
                {
                    key: 1,
                    quantite: 300,
                    checked: false,
                    produit: "poulet",
                    icone: "poulet",
                    unite_quantite: {
                        valeur: "gramme",
                        raccourci: "gr"
                    },
                    rayon: "viandes et poissons",
                    calories: {
                        valeur: 35,
                        unite: "Kcal"
                    },
                    prix_moyen: {
                        valeur: 10.75,
                        unite: "€"
                    },
                }
            ],
            produits: []
        }
    ]
}