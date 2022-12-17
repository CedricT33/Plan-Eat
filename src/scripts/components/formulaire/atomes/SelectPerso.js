export default function SelectPerso({liste, id, value, valueDefaut, placeholder, name, required, setItem, setData}) {

    function supprimerErreur(elmt) {
        elmt.parentNode.parentNode.parentNode.parentNode.classList.remove("error");
    }

    function selectionnerItem(e, item) {
        const elmtSelect = e.target.parentNode.parentNode.previousSibling;
        const elmtInput = elmtSelect.parentNode.nextElementSibling;
        elmtSelect.value = item.nom;
        elmtSelect.attributes.clef.value = item.key;
        if (item?.raccourci !== undefined) {
            elmtSelect.attributes.clef.value = item.raccourci;
        }
        if (elmtInput?.tagName === "INPUT") {
            elmtInput.attributes.clef.value = item.key;
        }
        e.target.parentNode.parentNode.parentNode.classList.toggle('active');
        supprimerErreur(e.target);
        if (setItem) {
            setItem(item);
        }
        if (setData) {
            setData(item.nom);
        }
    }

    function onClickListeDeroulante(e) {
        const isActive = e.target.parentNode.classList.contains('active');
        const elmtsSelect = document.querySelectorAll(".select-menu");
        elmtsSelect.forEach(elmt => {
            elmt.classList.remove('active');
        })
        if (isActive) {
            e.target.parentNode.classList.remove('active');
        }
        else {
            e.target.parentNode.classList.add('active');
        }
    }

    const listeOptions = liste?.map((elmt, i) => {
        const elmtIcone = elmt?.icone ? <div className={`icone ${elmt.icone}`}></div> : null;
        const classeElmt = elmt?.icone ? "icone" : "";
        return (
            <li key={i} className={classeElmt} onClick={e => {selectionnerItem(e, elmt)}}>
                {elmtIcone}
                {elmt.nom}
            </li>
        );
    })

    const requis = required ? "true" : "false";

    const valueParDefaut = value ? value : valueDefaut;

    return (
        <div className="select-menu form-part">
            <i onClick={e => onClickListeDeroulante(e)}></i>
            <input
                id={id + "_input"}
                readOnly
                className="saisie liste-deroulante"
                name={name}
                value={valueParDefaut}
                clef=""
                type="text"
                placeholder={placeholder}
                requis={requis}
                onClick={e => onClickListeDeroulante(e)} />
            <div className="options">
                <ul>
                    {listeOptions}
                </ul>
            </div>
        </div>
    );
}