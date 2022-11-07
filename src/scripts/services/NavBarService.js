import NavBar from "../components/NavBar";
import { pagesParams } from "../constants/PagesConstants";

export default function NavBarService({pathname}) {

    const pageActuelle = pagesParams.find(page => {
        return page.pathname === pathname
    });

    const navigationBar = pageActuelle?.isNavBar ? <NavBar/> : null;
    
    return (
        <>
        {navigationBar}
        </>
    );
}