import Compressor from "compressorjs";

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
      reader.onloadend = () => resolve(reader.result.slice(23));
      reader.readAsDataURL(blob);
    });
}

export function compresserFichier(fichier, options) {
    return new Compressor(fichier, options);
}