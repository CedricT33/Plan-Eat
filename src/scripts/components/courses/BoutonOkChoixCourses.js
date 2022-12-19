import { useNavigate } from "react-router-dom";
import { onClickOKChoixCourses } from "../../services/CoursesService";

export default function BoutonOkChoixCourses({label, semaine, annee}) {

    const navigate = useNavigate();

    function onClickEnregistrer() {
        onClickOKChoixCourses(semaine, annee);
        navigate(-1)
    }

    return (
        <div className="validation-container">
            <button
                className="bouton"
                onClick={onClickEnregistrer}>
                {label}
            </button>
        </div>
    );
}