export default function InputPerso({id, placeholder, name, maxLength, type, required}) {

    function supprimerErreur(elmt) {
        elmt.parentNode.parentNode.classList.remove("error");
    }

    function onSaisieInput(e) {
        supprimerErreur(e.target);
    }

    const requis = required ? "true" : "false";

    return (
        <input 
            id={id + "_input"}
            className="saisie"
            type={type}
            name={name}
            clef=""
            placeholder={placeholder}
            maxLength={maxLength}
            requis={requis}
            onChange={e => onSaisieInput(e)}/>
    );
}