import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import LandingPage from "./components/LandingPage.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <LandingPage />

      <Footer />
    </div>
  );
}

export default App;
