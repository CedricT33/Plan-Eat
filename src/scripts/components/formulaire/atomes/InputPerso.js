import { useState } from "react";

export default function InputPerso({id, placeholder, name, value, valueDefaut, maxLength, type, required}) {

    const valueParDefaut = value ? value : valueDefaut;
    const [valueModifiee, setValueModifiee] = useState(valueParDefaut);

    function supprimerErreur(elmt) {
        elmt.parentNode.parentNode.classList.remove("error");
    }

    function onSaisieInput(e) {
        setValueModifiee(e.target.value)
        supprimerErreur(e.target);
    }

    const requis = required ? "true" : "false";

    return (
        <input 
            id={id + "_input"}
            className="saisie"
            type={type}
            name={name}
            value={valueModifiee}
            clef=""
            placeholder={placeholder}
            maxLength={maxLength}
            requis={requis}
            onChange={e => onSaisieInput(e)}/>
    );
}