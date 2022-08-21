import React from "react";

import NERAccordion from "../ner-accordion";
import "./index.css";

const RightPanelContainer = (props) => {
  const label_to_word = props.data ? props.data["label_to_word"] : null;

  const NothingToDisplay = () => (
    <span className="nothing-to-display-banner">No entities found. Try with another model or text</span>
  );

  return (
    <div className="right-panel-container">
      {label_to_word && Object.keys(label_to_word).length === 0 && NothingToDisplay()}
      {label_to_word &&
        Object.keys(label_to_word).map((key, index) => {
          return (
            <NERAccordion key={index} label={key} words={label_to_word[key]} />
          );
        })}
    </div>
  );
};

export default RightPanelContainer;
