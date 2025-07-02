import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./componets/Login";
import Signup from "./componets/Signup";
import Home from "./componets/Home";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
