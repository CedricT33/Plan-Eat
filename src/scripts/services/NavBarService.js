import NavBar from "../components/NavBar";
import { pagesParams } from "../constants/AppConstantes";

export default function NavBarService({pathname}) {

    const pageActuelle = pagesParams.find(page => {
        return page.pathname === pathname;
    });

    const navigationBar = pageActuelle?.isNavBar ? <NavBar pathname={pathname}/> : null;
    
    return (
        <>
        {navigationBar}
        </>
    );
}