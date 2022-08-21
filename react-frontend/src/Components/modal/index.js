import * as React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";

import getAllMatching from "../../Utils/findmatching";

import './index.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const getRandomColor = () => {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// };
function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const getColorMap = (labels) => {
  let colorMap = {};
  labels.forEach((label) => {
    colorMap[label] = getRandomColor();
  });
  return colorMap;
};

const HighlightModal = (props) => {
  let textToHighlight = props.text

  const label_to_word = props.nerData.label_to_word;
  const word_to_label = props.nerData.word_to_label;

  console.log(label_to_word);
  console.log(word_to_label);
  console.log(label_to_word && Object.keys(label_to_word).length <= 0);
  console.log(word_to_label && Object.keys(word_to_label).length <= 0);

  if (
    (label_to_word && Object.keys(label_to_word).length <= 0) ||
    (word_to_label && Object.keys(word_to_label).length <= 0) ||
    !label_to_word ||
    !word_to_label
  ) {
    console.log("Enter");
    return null;
  }

  const labels = Object.keys(label_to_word);

  const colorMap = getColorMap(labels);

  let search = Object.keys(word_to_label);

  const chunks = getAllMatching(textToHighlight, search, false);

  const html = () => {
    return chunks.map((chunk) => {
      const { end, highlight, start } = chunk;
      const text = textToHighlight.substr(start, end - start);
      if (highlight) {
        let label = word_to_label[text]["label"];
        let color = colorMap[label];
        let style = { borderRadius: "5px", backgroundColor: color };
        return (
          <Tooltip title={label}>
            <mark style={style}> {text} </mark>
          </Tooltip>
        );
      } else {
        return text;
      }
    });
  };

  console.log(html());

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {html()}

          <br/>
          <br/>

          <div className="legend-outer-container">
          {labels.map((label) => {
            return (
              <div className="legend-inner-container">
                <div className="legend-color-container" style={{ backgroundColor: colorMap[label] }} />
                <span>{label}</span>
              </div>
            );
          })}</div>
        </Box>
      </Modal>
    </div>
  );
};

export default HighlightModal;
