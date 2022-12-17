

export default function VignetteFiltre({filtre, filtresActifs, setFiltresActifs}) {

    function onClickFiltre() {
        const isDejaPresent = filtresActifs?.find(filtreActif => filtreActif.icone === filtre.icone);
        const ListeFiltresActifs = [...filtresActifs];
        if (isDejaPresent) {
            ListeFiltresActifs?.forEach((filtreActif,id) => {
                if (filtreActif.icone === filtre.icone) {
                    ListeFiltresActifs.splice(id, 1);
                }
            })
        }
        else {
            ListeFiltresActifs.push(filtre);
        }
        setFiltresActifs(ListeFiltresActifs);
    }

    const classeFiltreActif = filtresActifs?.find(filtreActif => filtreActif.icone === filtre.icone)
        ? "actif" : "";
    
    return (
        <li className={classeFiltreActif} onClick={onClickFiltre}>
            <div className={`icone filtre ${filtre.icone}`}></div>
            <div className="titre-filtre">{filtre.nom}</div>
        </li>
    )
}
