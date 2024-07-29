import React, { useState } from "react";

export default function TextForm1(props) {
  const handelClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handelCopy = () =>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handelExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handelLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handelOnChange = (event) => {
    console.log("Now you can write new text with the existing one");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  //setText("newText");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handelOnChange}
          rows="8"
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary mx-1" onClick={handelUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handelLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1"onClick={handelExtraSpace}>Remove extra space</button>
        <button className="btn btn-primary mx-1" onClick={handelCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handelClearClick}>
          Clear
        </button>
      </div>
      <p>
        Word Count {text.split(" ").length} characters {text.length}
      </p>
      <h2>Preview</h2>
      <div>{text}</div>
    </div>
  );
}
