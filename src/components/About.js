import AccordianItem from "./AccordianItem";
import React from "react";

export default function About(props) {


    let style = {
        color: 'white',
        backgroundColor: 'black',
    }

    style = props.mode === 'dark' ? style : {};

    
  return (
    <div>
      <div className="container my-5" style={style}>
        <h1>{props.heading}</h1>
        <div className="accordion"  id="accordionExample">

            <AccordianItem title="Accordian #1" style={style} body="Body 1" target="t1" parent="#accordionExample" number="h1"/>
            <AccordianItem title="Accordian #2" style={style} body="Body 2" target="t2" parent="#accordionExample" number="h2"/>
            <AccordianItem title="Accordian #3" style={style} body="Body 3" target="t3" parent="#accordionExample" number="h3"/>
            <AccordianItem title="Accordian #4" style={style} body="Body 4" target="t4" parent="#accordionExample" number="h4"/>

        </div>

      </div>
    </div>
  );
}

About.defaultProps = {
    heading: "About Us"
}
