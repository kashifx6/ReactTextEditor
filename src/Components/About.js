import React, { useState } from "react";

export default function About() {
  let [myStyle, setMystyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  let [btnText, setbtnText] = useState("Enable Dark Mode");
  const changeDarkMode = () => {
    if (myStyle.backgroundColor === "white") {
      setMystyle({ backgroundColor: "black", color: "white" });
      setbtnText("Enable light Mode");
    } else {
      setMystyle({ backgroundColor: "white", color: "black" });
      setbtnText("Enable Dark Mode");
    }
  };

  return (
    <div style={myStyle}>
      <h2>About us</h2>
      <div className="alert alert-success" role="alert" style={myStyle}>
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </div>
      <button onClick={changeDarkMode} className="btn btn-dark btn-sm">
        {btnText}
      </button>
    </div>
  );
}
