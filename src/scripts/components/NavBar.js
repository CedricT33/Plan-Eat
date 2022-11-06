import { useEffect } from "react";

export default function NavBar({ongletActif}) {

    function ajouterOngletActif() {
        const boutonsNav = document.querySelectorAll("nav ul li");

        boutonsNav.forEach(bouton => {
            bouton.classList.remove("actif");
    
            if (bouton.classList.contains(ongletActif)) {
                bouton.classList.add("actif");
            }
        })
    }

    useEffect(() => {
        ajouterOngletActif();
    }, []);
    
    
    return (
        <nav>
            <ul>
                <li className="dashboard">
                    <div className="icone dashboard"></div>
                </li>
                <li className="ingredients">
                    <div className="icone ingredients"></div>
                </li>
                <li className="recette">
                    <div className="icone recette"><i></i></div>
                </li>
                <li className="agenda">
                    <div className="icone agenda"></div>
                </li>
                <li className="courses">
                    <div className="icone courses"></div>
                </li>
            </ul>
        </nav>
    );
}