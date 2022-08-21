import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import getAllMatching from "../../Utils/findmatching";

import "./index.css";

// const Highlighter = ({ text = "", highlights = [] }) => {
// if (!highlights || !highlights.length) {
//     return <span>{text}</span>;
// }
// for (let highlight in highlights) {
//     const regex = new RegExp(`(${highlight})`, "gi");
//     const parts = text.split(regex);
//     return (
//         <span>
//             {parts
//                 .filter((part) => part)
//                 .map((part, i) =>
//                     regex.test(part) ? (
//                         <mark key={i}>{part}</mark>
//                     ) : (
//                         <span key={i}>{part}</span>
//                     )
//                 )}
//         </span>
//     );
// }
// };

const Highlighter = (props) => {
  // getAllMatching(props.value)
  return (
    <div>
      <TextareaAutosize
        placeholder={"Enter your text here"}
        className="text-container"
        onChange={props.onChange}
        value={props.value}
        maxRows="100"
        minRows="30"
        cols="80"
      />
    </div>
  );
};

export default Highlighter;
