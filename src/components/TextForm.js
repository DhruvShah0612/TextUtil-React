import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const heandleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase! ", "success");
  };

  const heandleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase! ", "success");
  };

  const heandleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Clear! ", "success");
  };

  const heandleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard! ", "success");
  };

  const heandleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed! ", "success");
  };

  const heandleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={heandleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={heandleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={heandleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={heandleClearClick}
        >
          Cleare Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={heandleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={heandleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "dark" ? "white" : "#042743"
        }`}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words and {text.length} charactes
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => element.length !== 0)
              .length}{" "}
          Minutes read
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something Here!"}</p>
      </div>
    </>
  );
}
