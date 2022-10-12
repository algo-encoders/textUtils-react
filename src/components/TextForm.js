import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUpClick = (event) => {
        setText(text.toUpperCase());
    }
    const handleLoClick = (event) => {
        setText(text.toLowerCase());
    }
    const handleCmClick = (event) => {
        setText("");
    }


    const handleOnChange = (event) => {        
        setText(event.target.value);
    }

    return (
        
    <>
      
        <div className="container">

            <div className="row my-5">
                <div className="col-md-12">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" value={text}></textarea>
                </div>
                    <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary me-3" onClick={handleLoClick}>Convert to Lowercse</button>
                    <button className="btn btn-primary me-3" onClick={handleCmClick}>Clear Text</button>
                </div>
            </div> 

        </div>


        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>    

            <p>{text.split(" ").length * 0.008} Minutes Read</p>

            <h2>Preview</h2>

            <p>{text.length === 0 ? "Enter Something to Preview" : text}</p>
        </div>      


    </>
  )
}

TextForm.defaultProps = {
    heading: "Enter the text to analyze"
}
