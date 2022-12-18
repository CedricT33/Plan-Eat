import { useState } from "react";
import { useLocation } from "react-router-dom";
import { recupererDonneesAvecType } from "../services/StorageService";
import { dataConstantes } from "../constants/AppConstantes";

export default function ChoixCourses() {

    const params = useLocation();
    const semaine = params?.state?.semaine;
    const numeroSemaine = parseInt(semaine?.split(" ")[1]);

    const [produits, setProduits] = useState(recupererDonneesAvecType(dataConstantes.CATEGORIES.PRODUITS));

    const classesPresentation = produits?.length === 0 ? "show" : null;

    return (
        <div className="choix-courses-container">
            <div id="presentation-choix-courses" className={classesPresentation}>
                <div className="illustration-produits"></div>
                <div className="explications">
                    Cliquez sur le + pour créer les produits que vous souhaitez ajouter à la liste de courses...
                </div>
            </div>
        </div>
    )
}
