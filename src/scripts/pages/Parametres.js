import {
  supprimerToutLocalStorage,
  sauvegarderDonneesDansFichier,
  chargerDonneesDepuisFichier,
  lireFichier,
} from "../services/StorageService";

export default function Parametres() {
  return (
    <div className="parametres-container">
      <input
        type="file"
        id="input-file"
        onChange={(data) => lireFichier(data.target)}
      ></input>
      <div>
        <button onClick={sauvegarderDonneesDansFichier} className="bouton">
          SAUVEGARDER
        </button>
        <button onClick={chargerDonneesDepuisFichier} className="bouton">
          CHARGER
        </button>
        <button
          onClick={() => supprimerToutLocalStorage(true)}
          className="bouton clic-rouge"
        >
          RESET
        </button>
      </div>
    </div>
  );
}
