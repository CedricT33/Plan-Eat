export default function Tab({ title, onClick, isActif }) {

    const onClickTab = e => {
        e.preventDefault(0);
        onClick();
    }

    const classeActif = isActif === true ? "active" : "";

    return (
        <li className={`tab-item ${classeActif}`} onClick={onClickTab}>
            <div>{title}</div>
        </li>
    );
}