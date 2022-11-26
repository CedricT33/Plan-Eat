import InputPerso from "./atomes/InputPerso";

export default function InputMenu({id, label, placeholder, name, maxLength, type, children, required}) {

    const stringSup = children?.props?.children;
    const elmtSupplementaire = stringSup ? <div>{stringSup}</div> : null;

    return (
        <div id={id} className="container form-part">
            <label htmlFor={id + "_input"}>{label}</label>
            <div>
                <InputPerso
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    maxLength={maxLength}
                    type={type}
                    required={required}/>

                {elmtSupplementaire}
            </div>
            <div className="erreur">Ce champs est obligatoire !</div>
        </div>
    );
}