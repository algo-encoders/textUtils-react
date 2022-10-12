import React from "react";

export default function AccordianItem(props) {
  return (
    <div className="accordion-item" style={props.style}>
      <h2 className="accordion-header" id={props.number} style={props.style}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#"+props.target}
          aria-expanded="true"
          aria-controls="collapseOne"
          style={props.style}
        >
          {props.title}
        </button>
      </h2>
      <div
        id={props.target}
        className="accordion-collapse collapse show"
        aria-labelledby={props.number}
        data-bs-parent={props.parent}
      >
        <div className="accordion-body">
            {props.body}
        </div>
      </div>
    </div>
  );
}
