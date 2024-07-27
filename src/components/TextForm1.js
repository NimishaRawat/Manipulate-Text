import React ,{useState}from 'react'

export default function TextForm1(props) {
    const handelLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handelOnChange = (event) => {
        console.log("Now you can write new text with the existing one");
        setText(event.target.value);
    }
    const[text,setText] = useState("Enter text here");
    //setText("newText");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handelOnChange}rows="8" ></textarea>
      </div>
      <div >
      <button className='btn btn-primary ' style={{ marginRight: '10px' }} onClick={handelUpClick}>Convert to UpperCase</button>
      <button className='btn btn-primary ' style={{ marginRight: '10px' }} onClick={handelLowClick}>Convert to LowerCase</button>
      </div>
    </div>
  )
}
