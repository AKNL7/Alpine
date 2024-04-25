import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import LandingPage from "./components/LandingPage.js";
import Configurator  from "./components/Configurator.js";
import Jantes from "./components/Jantes.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/alpine-pure" element={<Configurator />} />
          <Route path="/alpine-legend" element={<Configurator />} />
          <Route path="/jantes" element={<Jantes />} />
        </Routes>
        <Outlet />
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
