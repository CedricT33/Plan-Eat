export default function InfoBulleRecette({type, params}) {

    return (
        <div className={`info-${type}`}>
            <div className="icone-container">
                <div className={`icone ${type}`}></div>
            </div>
            <div className="valeur">{params.valeur}</div>
            <div className="unite">{params.unite}</div>
        </div>
    );
}