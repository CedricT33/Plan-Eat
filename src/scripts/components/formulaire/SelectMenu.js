import SelectPerso from "./atomes/SelectPerso";

export default function SelectMenu({liste, id, value, label, placeholder, name, required, setData}) {

    return (
        <div id={id} className="container">
            <label htmlFor={id + "_input"}>{label}</label>
            
            <SelectPerso
                liste={liste}
                id={id}
                value={value}
                placeholder={placeholder}
                name={name}
                setData={setData}
                required={required}/>

            <div className="erreur">Ce champs est obligatoire !</div>
        </div>
    );
}