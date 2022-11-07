import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Dashboard';
import DetailRecette from "./DetailRecette";
import Ingredients from "./Ingredients";
import Agenda from "./Agenda";
import Courses from "./Courses";
import Recette from "./Recette";
import Ingredient from "./Ingredient";
import ChoixPlat from "./ChoixPlat";


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
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouterApp;