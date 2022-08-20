import React from "react";

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
  return (
    <div>
      <textarea name="NER input" onChange={props.onChange} value={props.value} />
    </div>
  );
};

export default Highlighter;
