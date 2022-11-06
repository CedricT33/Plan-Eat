import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../styles/style.css';
import PlanEat from './components/PlanEat';
import Dashboard from './components/Dashboard';

function NotFound() {
  return <h1>"404 Route Non Paramétrée"</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlanEat />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
