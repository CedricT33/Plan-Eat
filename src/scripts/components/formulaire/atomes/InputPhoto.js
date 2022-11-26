import { blobToBase64, compresserFichier } from "../../../services/Util";

export default function InputPhoto() {

    function onClickBoutonPhoto() {
        const elmtInputPhoto = document.getElementById('input-photo');
        elmtInputPhoto.click();
    }

    function afficherImage(image) {
        const elmtAjouterPhoto = document.querySelector("#saisiePhoto .container-bouton");
        const elmtImage = document.getElementById("image-photo");
        const elmtInputPhoto = document.getElementById("input-photo");

        blobToBase64(image).then(imageB64 => {
            elmtInputPhoto.innerText = imageB64;
        });
        
        elmtAjouterPhoto.classList.remove("show");
        elmtImage.classList.add("show");
        const urlImage = URL.createObjectURL(image);
        elmtImage.src = urlImage;
    }

    function onInputPhotoChange(e) {
        const fichier = e.target?.files[0];

        if (!fichier) {
            return
        }

        compresserFichier(fichier, {
            quality: 0.2,
            success(imgBlob) {
                afficherImage(imgBlob);
            },
            error(e) {
                console.log("error : ", e);
            }
        })
    }

    return (
        <div className="ajout-photo-container" onClick={onClickBoutonPhoto}>
            <div className="container-bouton show">
                <div className="icone photo"></div>
                <div className="text-bouton">Ajouter une photo</div>
            </div>

            <img id="image-photo" alt=""></img>

            <input
                id="input-photo"
                className="saisie"
                type="file"
                name="photo"
                accept="image/*"
                onChange={e => onInputPhotoChange(e)}/>
        </div>
    );
}