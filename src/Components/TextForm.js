import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [copybtnvalue, setcopybtnvalue] = useState("Copy Text");
  const [findText, setfindText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleCopyText = () => {
    if (text.length > 0) {
      navigator.clipboard.writeText(text);
      setcopybtnvalue("Text Copied");
      
      setTimeout(function () {
        setcopybtnvalue("Copy Text");
      }, 3000);
    } else {
      setcopybtnvalue("Nothing To Copy");
      setTimeout(function () {
        setcopybtnvalue("Copy Text");
      }, 3000);
    }
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearText = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleFindText = () => {
    if (text.includes(findText)) {
      console.log("find");
    }
  };
  const handleReplaceText = () => {
    if (text.includes(findText)) {
      setText(text.replace(findText, replaceText));
    }
  };
  const handleOnChangeFindText = (event) => {
    setfindText(event.target.value);
  };
  const handleOnChangeReplaceText = (event) => {
    setReplaceText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <form className="mt-3 mb-3">
          <div className="form-group">
            <h1 className="mb-2">{props.heading}</h1>
            <textarea
              className="form-control"
              value={text}
              style={{
                backgroundColor: props.mode === 'dark' ? '#262a2e' : 'white',
                color: props.mode === 'dark' ? 'white' : '#262a2e',
              }}
              onChange={handleOnChange}
              id="myBox"
              rows="6"
            ></textarea>
          </div>
          <button
            className="btn btn-primary btn-sm mx-1"
            type="button"
            onClick={handleUpClick}
          >
            Conver To Uppercase
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            type="button"
            onClick={handleLowClick}
          >
            Conver To Lowercase
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            type="button"
            onClick={handleClearText}
          >
            Clear Text
          </button>

          <Popup
            trigger={
              <button className="btn btn-primary btn-sm mx-1" type="button">
                Find Text
              </button>
            }
            position="right center"
          >
            <div>
              <input
                type="text"
                value={findText}
                onChange={handleOnChangeFindText}
                className="form-control"
              />
              <button
                className="btn btn-primary btn-sm my-2"
                type="button"
                onClick={handleFindText}
              >
                Search Text
              </button>
              <input
                type="text"
                value={replaceText}
                onChange={handleOnChangeReplaceText}
                className="form-control"
              />

              <button
                className="btn btn-primary btn-sm my-2 mx-1"
                type="button"
                onClick={handleReplaceText}
              >
                Replace Text
              </button>
            </div>
          </Popup>
          <button
            className="btn btn-primary btn-sm mx-1"
            type="button"
            onClick={handleCopyText}
          >
            {copybtnvalue}
          </button>
        </form>
      </div>
      <div className="container my-2">
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{text.split(" ").length * 0.008} minutes read</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter your text to preview"}</p>
      </div>
    </>
  );
}
