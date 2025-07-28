import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const appStyle = {
    height: "50vh",
    padding: "2rem",
    textAlign: "center",
    transition: "all 0.3s ease",
    backgroundColor: darkMode ? "#1b1515" : "#f5f5f5",
    color: darkMode ? "#f5f5f5" : "#333",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    padding: "0.6rem 1.2rem",
    marginTop: "1rem",
    border: "none",
    backgroundColor: darkMode ? "#2492ec" : "#023770",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  };

  return (
    <div style={appStyle}>
      <h1>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
      <button style={buttonStyle} onClick={toggleTheme}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
