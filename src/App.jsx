import React from "react";
import HomeRoute from "./routes/homeRoute";
import AboutRoute from "./routes/aboutMeRoute";
import PortfolioRoute from "./routes/portfolioRoute";
import ContactRoute from "./routes/contactRoute";
import NotFound from "./routes/notfoundRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/portfolio" element={<PortfolioRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
