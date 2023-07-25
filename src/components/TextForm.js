import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("0");
  const handleUpClick = () => {
    //     console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    //     console.log("on Change");
    setText(event.target.value);
  };
  const handleLrClick = () => {
    let lowertext = text.toLowerCase();
    setText(lowertext);
  };

  return (
    <>
      <div className="container">
        <label htmlForfor="myBox" className="form-label">
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert toUppercase
        </button>
        <button className="btn btn-primary m-3" onClick={handleLrClick}>
          Convert toLowercase
        </button>
      </div>
      <div className="container my-5">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} wpmiM read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
