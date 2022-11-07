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

    const classesTitre = params?.isBoutonRetour ? "titre" : "titre left-empty"

    return (
        <header>
            {boutonRetour}
            <div className={classesTitre}>{params?.titre}</div>
            <div className="boutons">
                {boutonParam}
            </div>
        </header>
    );
}