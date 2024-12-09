import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./navigations/Routes";

function App() { 

  return (
    <>
      <Router>
        <div className="page">
          <AppRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
