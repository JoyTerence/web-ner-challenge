import * as React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";

import getAllMatching from "../../Utils/findmatching";

import "./index.css";

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
  let textToHighlight = props.text;

  const label_to_word = props.data.label_to_word;
  const word_to_label = props.data.word_to_label;

  if (
    (label_to_word && Object.keys(label_to_word).length <= 0) ||
    (word_to_label && Object.keys(word_to_label).length <= 0) ||
    !label_to_word ||
    !word_to_label
  ) {
    return null;
  }

  let search = Object.keys(word_to_label);
  const chunks = getAllMatching(textToHighlight, search, false);

  const labels = Object.keys(label_to_word);
  const colorMap = getColorMap(labels);

  const html = () => {
    return chunks.map((chunk, index) => {
      const { end, highlight, start } = chunk;
      const text = textToHighlight.substr(start, end - start);
      if (highlight && text in word_to_label) {
        let label = word_to_label[text]["label"];
        let color = colorMap[label];
        let style = { borderRadius: "5px", backgroundColor: color };
        return (
          <Tooltip key={index} title={label}>
            <mark style={style}> {text} </mark>
          </Tooltip>
        );
      } else {
        return text;
      }
    });
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="highlight-modal-container" sx={style}>
          <div className="highlight-modal-content">
            <div className="highlight-modal-text-container">{html()}</div>
            <div className="highlight-modal-vertical-line" />
            <div className="highlight-modal-legend-container">
              {labels.map((label, index) => {
                return (
                  <div key={index} className="legend-inner-container">
                    <div
                      className="legend-color-container"
                      style={{ backgroundColor: colorMap[label] }}
                    />
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default HighlightModal;
