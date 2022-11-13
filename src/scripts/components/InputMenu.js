export default function InputMenu({id, label, placeholder, name, max, maxLength, type, children, required}) {

    const stringSup = children?.props?.children;
    const elmtSupplementaire = stringSup ? <div>{stringSup}</div> : null;

    function supprimerErreur(elmt) {
        elmt.parentNode.parentNode.classList.remove("error");
    }

    function onSaisieInput(e) {
        supprimerErreur(e.target);
    }

    return (
        <div id={id} className="container form-part">
            <label htmlFor={id + "_input"}>{label}</label>
            <div>
                <input 
                    id={id + "_input"}
                    className="saisie"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    max={max}
                    required={required}
                    onChange={e => onSaisieInput(e)}/>
                {elmtSupplementaire}
            </div>
            <div className="erreur">Ce champs est obligatoire !</div>
        </div>
    );
}