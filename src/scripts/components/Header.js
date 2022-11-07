import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routesConstants } from "../constants/PagesConstants";

export default function Header({params}) {

    const navigate = useNavigate();

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
        ?   <Link to={routesConstants.RECETTE} className="modif">
                <div className="icone modif"></div>
            </Link>
        :   null;

    const boutonSuppr = params?.isBoutonSuppr
        ?   <Link to={routesConstants.RECETTE} className="suppr">
                <div className="icone suppr"></div>
            </Link>
        :   null;

    const classesTitre = params?.isBoutonRetour ? "titre" : "titre left-empty";

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
    });

    return (
        <header>
            <div className="header-container">
                {boutonRetour}
                <div className={classesTitre}>{params?.titre}</div>
                <div className="boutons">
                    {boutonModif}
                    {boutonSuppr}
                    {boutonParam}
                </div>
            </div>
        </header>
    );
}