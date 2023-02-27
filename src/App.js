import React, { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
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
    <div>
      <Navbar
        title="ReactTextEditor"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter your text to analyze"
          alert={alert}
          mode={mode}
        />
      </div>
    </div>
  );
}

export default App;
