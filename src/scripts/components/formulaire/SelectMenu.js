import SelectPerso from "./atomes/SelectPerso";

export default function SelectMenu({liste, id, label, placeholder, name, required}) {

    return (
        <div id={id} className="container">
            <label htmlFor={id + "_input"}>{label}</label>
            
            <SelectPerso
                liste={liste}
                id={id}
                placeholder={placeholder}
                name={name}
                required={required}/>

            <div className="erreur">Ce champs est obligatoire !</div>
        </div>
    );
}