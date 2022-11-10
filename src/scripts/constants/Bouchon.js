export const bouchon = {
    ingredients: [
        {
            key: 1,
            produit: "Poulet",
            icone: "poulet",
            quantite: "500",
            unite_quantite: "gr",
            rayon: "viandes et poissons",
            type: "solide",
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
            produit: "Curry",
            icone: "epice-farine",
            quantite: "1",
            unite_quantite: "cas",
            rayon: "herbes et épices",
            type: "solide",
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
            produit: "Steak de boeuf",
            icone: "boeuf",
            quantite: "1",
            unite_quantite: null,
            rayon: "viandes et poissons",
            type: "solide",
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
                    produit: "oignon",
                    quantite: "5",
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
        }
    ]
}