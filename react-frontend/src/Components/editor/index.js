import React from "react";

import Highlighter from "../highlighter";

import './index.css'

const Editor = (props) => {
  return (
    <div className="editor-container">
      {/* <form onSubmit={props.handleSubmit}>
        <label> */}
          {/* <Highlighter text="the quick brown fox jumps over the lazy dog" highlight="fox the"/> */}
          <Highlighter {...props} />
        {/* </label>
        <input type="submit" value="Submit" /> */}
      {/* </form> */}
    </div>
  );
};

export default Editor;
