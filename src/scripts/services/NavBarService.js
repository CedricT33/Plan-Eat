import NavBar from "../components/NavBar";

export default function NavBarService({pathname}) {

    const routesAvecNav = [
        "/Plan-Eat/dashboard",
        "/Plan-Eat/ingredients",
        "/Plan-Eat/agenda",
        "/Plan-Eat/courses"
    ];
    const navigationBar = routesAvecNav.includes(pathname) ? <NavBar/> : null;
    
    return (
        <>
        {navigationBar}
        </>
    );
}