import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Dashboard />} />
    </>
  )
);

export default Routes;
