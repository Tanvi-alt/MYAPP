import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick=()=>{
      let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  }
  const handleclearClick=()=>{
    let newText = '';
  setText(newText);
  props.showAlert("text cleared", "success");
}
const handleSpace =()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("spaces handled", "success");
}
const handleClick=()=>{
  let newText = text+'@gmail.com ';
setText(newText);
}
 const handleCopy=()=>{
  var text = document.getElementById("mybox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard", "success");
 }

    const handleOnChange=(event)=>{
        setText(event.target.value);
      }
    const[text, setText]=useState('');
  return (
    <>
<div className={`container mb-3 text-${props.mode ==='light'?'dark':'light'}`}>
<h1>{props.heading}</h1>
<div className="container mb-3" >
<label htmlFor="mybox" className="form-label" >Text area</label>
<textarea className={`form-control text-${props.mode === 'light'?'dark':'light'}`} id="mybox" style={{backgroundColor :props.mode==='light'?'white':'grey', Color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} value={text} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>LOWERCASE</button>
<button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleClick}> Add @gmail.com </button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra Space</button>
</div>
<div className={`container mb-3 text-${props.mode ==='light'?'dark':'light'}`}>
  <h2>Your Text Contains </h2> 
  <p> char {text.length} words are {text.split(" ").length-1}</p>
  <p> minutes to read {0.008 * (text.split(" ").length-1)}</p>
  <h2>PREVIEW </h2>
  <p> {text.length>0?text:"Enter something for Preview"}</p> 
</div>
</>
);
}

