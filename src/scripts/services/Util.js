import Compressor from "compressorjs";

const listeChainesARetirerBlob = [
    "data:application/octet-stream;base64,",
    "data:image/jpeg;base64,"
]

export function recupererDateAujourdhui() {
    const today = new Date();
    const jour = today.getDate();
    const mois = today.getMonth() + 1;
    const annee = today.getFullYear();
    return jour + "/" + mois + "/" + annee;
}

export function mettrePremiereLettreEnMajuscule(ChaineDeCaracteres) {
    return ChaineDeCaracteres.charAt(0).toUpperCase() + ChaineDeCaracteres.slice(1);
}

export function remplacerCharacteresSpeciaux(ChaineDeCaracteres) {
    if(typeof ChaineDeCaracteres === 'string'){
        const tab_accent_brut = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ";
        const tab_sansAccent_brut = "aaaaaaaaaaaaooooooooooooeeeeeeeecciiiiiiiiuuuuuuuuynn";
        const tab_accent = tab_accent_brut.split('');
        const tab_sansAccent = tab_sansAccent_brut.split('');

        let str = ChaineDeCaracteres;
        let tabCorrAcc = [];
        let i = -1;
        while (tab_accent[++i]) {
            tabCorrAcc[tab_accent[i]] = tab_sansAccent[i];
        }
        tabCorrAcc['Œ'] = 'OE';
        tabCorrAcc['œ'] = 'oe';
        str = str.replace(/./g, function($0) {
            return (tabCorrAcc[$0]) ? tabCorrAcc[$0] : $0
        });
        str = str.replace(/&amp;/g, '_');
        str = str.replace(/_amp;/g, '');
        str = str.replace(/&lt;/g, '_');
        str = str.replace(/_lt;/g, '_');
        str = str.replace(/&gt;/g, '_');
        str = str.replace(/_gt;/g, '_');
        str = str.replace(/(#| |"|@|:|\.|,|;|'|%|!|²|=|÷|\+|\?|\/|\[|\]|\{|\}|\*|\^|\$|\\|`|"|'|¨|€|£|¤|µ|§|~|ƒ|„|©|°)/g, '_')
        
        return str;
    }
}

export function base64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || "";
    sliceSize = sliceSize || 512;
  
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
  
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
  
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      var byteArray = new Uint8Array(byteNumbers);
  
      byteArrays.push(byteArray);
    }
  
    return new File(byteArrays, "pot", { type: contentType });
}

export function blobToBase64(blob) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imgBase64 = reader.result;
            let image = imgBase64.slice();
            const chaineARetirer = listeChainesARetirerBlob.find(chaine => {
                return imgBase64.indexOf(chaine) !== -1; 
            });
            if (chaineARetirer) {
                image = imgBase64.slice(chaineARetirer.length);
            }
            resolve(image);
        };
        reader.readAsDataURL(blob);
    });
}

export function compresserFichier(fichier, options) {
    return new Compressor(fichier, options);
}

export function afficherImageDansRecette(image) {
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