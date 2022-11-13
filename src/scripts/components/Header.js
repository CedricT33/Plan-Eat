import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routesConstants } from "../constants/AppConstantes";
import { supprimerLocalStorage } from "../services/StorageService";

export default function Header({params}) {

    const navigate = useNavigate();

    let index;

    function recupererIndex() {
       index = document.querySelector(".detail-container")?.getAttribute("index");
    }

    function supprimerRecette() {
        // TODO POPIN
        supprimerLocalStorage({ recettes: {key: index} });
        console.log("suppression de la recette avec la key : ", index);
        navigate(-1);
    }

    const boutonRetour = params?.isBoutonRetour
        ?   <button onClick={() => navigate(-1)} className="back">
                <div className="icone back"></div>
            </button>
        :   null;

    const boutonParam = params?.isBoutonParam
        ?   <Link to={routesConstants.PARAMETRES} className="setting">
                <div className="icone setting"></div>
            </Link>
        :   null;

    const boutonModif = params?.isBoutonModif
        ?   <Link to={routesConstants.RECETTE} className="modif" state={{index: index}}>
                <div className="icone modif"></div>
            </Link>
        :   null;

    const boutonSuppr = params?.isBoutonSuppr
        ?   <button onClick={supprimerRecette}>
                <div className="icone suppr"></div>
            </button>
        :   null;

    const classesTitre = params?.isBoutonRetour ? "titre" : "titre left-empty";
    const classesHeader = params?.isHeaderTransparent ? "transparent" : null;

    const gererBoutonsADroite = () => {
        const containerBoutonsADroite = [...document.querySelectorAll(".boutons")][0];
        if (containerBoutonsADroite?.childElementCount !== 0) {
            containerBoutonsADroite.classList.remove("vide");
        }
        else {
            containerBoutonsADroite.classList.add("vide");
        }
    }

    useEffect(() => {
        gererBoutonsADroite();
        recupererIndex();
    });

    return (
        <header className={classesHeader}>
            <div className="header-container">
                {boutonRetour}
                <h1 className={classesTitre}>{params?.titre}</h1>
                <div className="boutons">
                    {boutonModif}
                    {boutonSuppr}
                    {boutonParam}
                </div>
            </div>
        </header>
    );
}