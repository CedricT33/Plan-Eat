export default function TextAreaPerso({id, placeholder, name, maxLength, type, required}) {

    function supprimerErreur(elmt) {
        elmt.parentNode.parentNode.classList.remove("error");
    }

    function onSaisieInput(e) {
        supprimerErreur(e.target);
    }

    const requis = required ? "true" : "false";

    return (
        <textarea 
            id={id + "_input"}
            className="saisie"
            type={type}
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
            requis={requis}
            onChange={e => onSaisieInput(e)}/>
    );
}