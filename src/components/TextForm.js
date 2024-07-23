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

  const heandleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert("Text Downloaded! ", "success");
  };

  const heandleCopyToClicpboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard! ", "success");
  };

  const heandleInverse = () => {
    let newText = text.split("");
    let newText1 = [];
    for (let i = 0; i < newText.length; i++) {
      if (newText[i] === newText[i].toUpperCase()) {
        newText1.push(newText[i].toLowerCase());
      } else {
        newText1.push(newText[i].toUpperCase());
      }
    }
    setText(newText1.join(""));
    props.showAlert("Inverse Case! ", "success");
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

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={heandleDownload}
        >
          Download Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={heandleCopyToClicpboard}
        >
          Copy to Clipboard
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={heandleInverse}
        >
          Inverse Case
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
