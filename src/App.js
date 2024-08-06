import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FlexboxPage from "./pages/FlexboxPage";
import GridPage from "./pages/GridPage";
import "./styles/App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <NavBar toggleTheme={toggleTheme} currentTheme={theme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flexbox" element={<FlexboxPage />} />
        <Route path="/grid" element={<GridPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
