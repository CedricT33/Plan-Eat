import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

// TODO voir useOutletContext pour envoer des params au footer et header

export default function PlanEat() {

    return (
        <>
        <Outlet/>
        <NavBar ongletActif="dashboard"/>
        </>
    );
}