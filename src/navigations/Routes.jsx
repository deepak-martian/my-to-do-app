import { Route, Routes } from "react-router-dom";
import Counter from "../components/Counter";
import { LiftingUp } from "../components/LiftingUp";
import { Toggle } from "../ToggleSwitch/Toggle";
import { ToDo } from "../TODO/ToDo";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/lifting-up" element={<LiftingUp />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/to-do" element={<ToDo />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
