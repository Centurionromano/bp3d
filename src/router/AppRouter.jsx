import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import E4 from "../pages/E4";
import Ed4 from "../pages/Ed4";
import Ed5 from "../pages/Ed5";
import Ghm from "../pages/Ghm";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/e4" element={<E4 />} />
        <Route exact path="/ed4" element={<Ed4 />} />
        <Route exact path="/ed5" element={<Ed5 />} />
        <Route exact path="/ghm" element={<Ghm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
