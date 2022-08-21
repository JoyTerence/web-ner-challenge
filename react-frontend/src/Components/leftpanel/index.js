import React from "react";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Editor from "../../Components/editor";
import SelectDrop from "../../Components/select";

import "./index.css";

const LeftPanelContainer = (props) => {

  const showModelDropdown = props.models && props.models.length;
  return (
    <div className="left-panel-container">
      <Editor
        handleSubmit={props.handleSubmit}
        onChange={props.onChange}
        value={props.value}
      />
      <div className="left-control-container">
        {showModelDropdown ? (
          <SelectDrop
            title="Model"
            value={props.model}
            items={props.models}
            onItemClick={props.onModelClick}
          />
        ) : (
          <span> "No models" </span>
        )}
        <SelectDrop
          title="Language"
          value={props.language}
          items={props.languages}
          onItemClick={props.onLanguageClick}
        />
        <Button
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
          onClick={props.handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default LeftPanelContainer;
