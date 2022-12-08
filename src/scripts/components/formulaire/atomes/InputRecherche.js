import { useState } from "react";

export default function InputRecherche({placeholder, setRechercheValue}) {

    const [inputValue, setInputValue] = useState("");

    let classeCroix = inputValue !== "" ? "show" : "";

    function onChangeInput(value) {
        setInputValue(value);
        setRechercheValue(value);
    }

    function onDeleteInput() {
        setInputValue("");
        setRechercheValue("");
    }

    return (
        <div id="container_recherche">
            <div className="icone loupe"></div>
            <input type="text"
                value={inputValue}
                onInput={e => onChangeInput(e.target.value)}
                maxLength="20"
                placeholder={placeholder} />
            <div className={`croix ${classeCroix}`} onClick={onDeleteInput}>+</div>
        </div>
    )
}
