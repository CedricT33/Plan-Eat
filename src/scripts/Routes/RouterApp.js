import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import DetailRecette from "../pages/DetailRecette";
import Ingredients from "../pages/Ingredients";
import Agenda from "../pages/Agenda";
import Courses from "../pages/Courses";
import Recette from "../pages/Recette";
import Ingredient from "../pages/Ingredient";
import ChoixPlat from "../pages/ChoixPlat";
import Parametres from "../pages/Parametres";
import ChoixCourses from "../pages/ChoixCourses";
import AjoutProduit from "../pages/AjoutProduit";


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
        <Route path="recette-modif" element={<Recette />} />
        <Route path="ingredient" element={<Ingredient />} />
        <Route path="ingredient-modif" element={<Ingredient />} />
        <Route path="choix-plat" element={<ChoixPlat />} />
        <Route path="choix-courses" element={<ChoixCourses />} />
        <Route path="produit-ajout" element={<AjoutProduit />} />
        <Route path="parametres" element={<Parametres />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouterApp;