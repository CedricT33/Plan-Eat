export default function SelectMenu({liste, id, label, placeholder, name, required}) {

    function supprimerErreur(elmt) {
        elmt.parentNode.parentNode.parentNode.parentNode.classList.remove("error");
    }

    function selectionnerItem(e, item) {
        e.target.parentNode.parentNode.previousSibling.value = item;
        e.target.parentNode.parentNode.parentNode.classList.toggle('active');
        supprimerErreur(e.target);
    }

    function onClickListeDeroulante(e) {
        e.target.parentNode.classList.toggle('active');
    }

    const listeOptions = liste.map((icone, i) => {
        return <li key={i} className={icone} onClick={e => {selectionnerItem(e, icone)}}>{icone}</li>
    })

    return (
        <div id={id} className="container">
            <label htmlFor={id + "_input"}>{label}</label>
            <div className="select-menu form-part">
                <i onClick={e => onClickListeDeroulante(e)}></i>
                <input
                    id={id + "_input"}
                    readOnly
                    className="saisie liste-deroulante"
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    required={required}
                    onClick={e => onClickListeDeroulante(e)} />
                <div className="options">
                    <ul>
                        {listeOptions}
                    </ul>
                </div>
            </div>
            <div className="erreur">Ce champs est obligatoire !</div>
        </div>
    );
}