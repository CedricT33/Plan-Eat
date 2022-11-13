import { supprimerToutLocalStorage } from "../services/StorageService";

export default function Parametres() {

    return (
        <div className="parametres-container">
            <div>
                <button onClick={supprimerToutLocalStorage} className="bouton">RESET</button>
            </div>
        </div>
    );
}