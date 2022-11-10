import { useLocation } from "react-router-dom";
import RouterApp from "./Routes/RouterApp";
import NavBarService from "./services/NavBarService";
import HeaderService from "./services/HeaderService";

function App() {

  const { pathname } = useLocation();

  return (
    <>
    <HeaderService pathname={pathname}/>
    <RouterApp />
    <NavBarService pathname={pathname}/>
    </>
  );
}

export default App;
