import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./componets/Login";
import Signup from "./componets/Signup";
import Home from "./componets/Home";
import RunIdleTime from "./componets/RunIdleTime";
import AlertsDashboard from "./componets/AlertsDashboard";



import CartonerA300 from "./componets/CartonerA300";
import CartonerDetails from "./componets/CartonerDetails";
import PGB250Dashboard from "./componets/PGB250Dashboard";
import PGB250Details from "./componets/PGB250Details";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/run-idle" element={<RunIdleTime />} />
      <Route path="/alerts-dashboard" element={<AlertsDashboard />} />
      <Route path="/machine/a300" element={<CartonerA300 />} />
      <Route path="/machine/a300/details" element={<CartonerDetails />} />
      <Route path="/machine/pgb250" element={<PGB250Dashboard />} />
      <Route path="/machine/pgb250/details" element={<PGB250Details />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
