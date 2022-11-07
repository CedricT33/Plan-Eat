import { NavLink } from "react-router-dom";

export default function NavBar() {
    
    return (
        <nav>
            <ul>
                <li className="dashboard">
                    <NavLink to="/Plan-Eat/dashboard">
                        <div className="icone dashboard"></div>
                    </NavLink>
                </li>
                <li className="ingredients">
                    <NavLink to="/Plan-Eat/ingredients">
                        <div className="icone ingredients"></div>
                    </NavLink>
                </li>
                <li className="recette">
                    <NavLink to="/Plan-Eat/recette">
                        <div className="icone recette">
                            <i></i>
                        </div>
                    </NavLink>
                </li>
                <li className="agenda">
                    <NavLink to="/Plan-Eat/agenda">
                        <div className="icone agenda"></div>
                    </NavLink>
                </li>
                <li className="courses">
                    <NavLink to="/Plan-Eat/courses">
                        <div className="icone courses"></div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}