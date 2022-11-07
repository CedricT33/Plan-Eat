import { useLocation } from "react-router-dom";
import RouterApp from "./components/RouterApp";
import NavBarService from "./services/NavBarService";

function App() {

  const { pathname } = useLocation();

  return (
    <>
    <RouterApp />
    <NavBarService pathname={pathname}/>
    </>
  );
}

export default App;
