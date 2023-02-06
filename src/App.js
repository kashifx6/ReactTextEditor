import React, { useState } from "react";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Disable Dark Mode");
      document.body.style.backgroundColor = "#262a2e";
      document.body.style.color = "white";
      setAlert("Dark Mode Enabled");
    } else {
      setMode("light");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setAlert("Light Mode Enabled");
    }
  };
  return (
    <Router>
      <div>
        <Navbar
          title="textutils"
          mode={mode}
          toggleMode={toggleMode}
          modeText={modeText}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter your text to analyze"
                  alert={alert}
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
