import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('Enter text here');
    const handleUpClick = (event) => {
        setText(text.toUpperCase());
    }


    const handleOnChange = (event) => {        
        setText(event.target.value);
    }

    return (
        
    <>
      
        <div className="row my-5">
            <div className="col-md-12">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" value={text}></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
        </div>       


    </>
  )
}

TextForm.defaultProps = {
    heading: "Enter the text to analyze"
}
