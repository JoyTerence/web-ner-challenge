import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import './index.css'

const NERAccordion = (props) => {
  return (
    <div className="accordion-container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.label}</Typography>
        </AccordionSummary>

        {props.words.map((word, index) => {
          return (
            <AccordionDetails className="accordion-detail-container" key={index}>
              <Typography>{word}</Typography>
            </AccordionDetails>
          );
        })}
      </Accordion>
    </div>
  );
};

export default NERAccordion;
