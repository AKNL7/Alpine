import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import LandingPage from "./components/LandingPage.js";
import Configurator  from "./components/Configurator.js";

function App() {
  return (
    <div className="App">
        <NavBar />
        {/* <Header /> */}
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/configurator"
            element={<Configurator />} />
          
        </Routes>
        <Outlet />
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
