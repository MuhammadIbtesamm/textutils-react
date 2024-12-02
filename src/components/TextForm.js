import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUPClick= ()=> {
        let UpperCase = text.toUpperCase();
        setText(UpperCase);
    }
    const handlelowClick= ()=> {
        let LowerCase = text.toLowerCase();
        setText(LowerCase);
    }
    const clearClick= ()=> {
        setText("");
    }
    const copyText = () => {
        var copy = document.getElementById("myBox");
        copy.select();
        navigator.clipboard.writeText(copy.value);
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#2A2A2A':'#F7F6F6', border:'1px solid whtie', color:props.mode==='dark'?'#F7F6F6':'#2A2A2A'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUPClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-2" onClick={clearClick}>Clear Text</button>
        <button className="btn btn-success mx-2" onClick={copyText}>Copy Text</button>
    </div>
    <div className="conatiner my-2">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {Heading: PropTypes.string.isRequired}
