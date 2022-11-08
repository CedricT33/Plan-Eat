import NavBar from "../components/NavBar";
import { pagesParams, routesConstants } from "../constants/PagesConstants";

export default function NavBarService({pathname}) {

    const pageActuelle = pagesParams.find(page => {
        return page.pathname === pathname;
    });

    const isIngredients = pathname === routesConstants.INGREDIENTS;

    const params = {
        isIngredients: isIngredients
    }

    const navigationBar = pageActuelle?.isNavBar ? <NavBar params={params}/> : null;
    
    return (
        <>
        {navigationBar}
        </>
    );
}