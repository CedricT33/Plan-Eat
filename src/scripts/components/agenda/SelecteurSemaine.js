export default function SelecteurSemaine({semaine, setSemaine}) {

    function onClickBackButton(e) {
        setSemaine(semaine - 1);
        e.preventDefault();
    }

    function onClickNextButton(e) {
        setSemaine(semaine + 1);
        e.preventDefault();
    }

    return (
        <div className="container-selection-semaine">
            <button onClick={(e) => onClickBackButton(e)}><div className="icone back"></div></button>
            <h2>{`Semaine ${semaine}`}</h2>
            <button onClick={(e) => onClickNextButton(e)}><div className="icone next"></div></button>
        </div>
    )
}