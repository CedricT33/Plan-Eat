import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import DetailRecette from "../components/DetailRecette";
import Ingredients from "../components/Ingredients";
import Agenda from "../components/Agenda";
import Courses from "../components/Courses";
import Recette from "../components/Recette";
import Ingredient from "../components/Ingredient";
import ChoixPlat from "../components/ChoixPlat";
import Parametres from "../components/Parametres";


function NotFound() {
  return <Navigate to="/Plan-Eat/dashboard" />
}

function RouterApp() {
  return (
    <Routes>
      <Route path="/Plan-Eat">
        <Route index element={<NotFound />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="detail" element={<DetailRecette />} />
        <Route path="ingredients" element={<Ingredients />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="courses" element={<Courses />} />
        <Route path="recette" element={<Recette />} />
        <Route path="ingredient" element={<Ingredient />} />
        <Route path="choix-plat" element={<ChoixPlat />} />
        <Route path="parametres" element={<Parametres />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouterApp;