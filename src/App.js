import { RouterProvider } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard/Dashboard";
import Routes from "./Routes";
function App() {
  return (
    <>
      <Dashboard>
        <RouterProvider router={Routes} />
      </Dashboard>
    </>
  );
}

export default App;
