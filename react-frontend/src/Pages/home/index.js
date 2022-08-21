import React from "react";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";

import LeftPanelContainer from "../../Components/leftpanel";
import RightPanelContainer from "../../Components/rightpanel";

import HighlightModal from "../../Components/modal";

import api from "../../Api/api";

import "./index.css";

import * as payloadGenerator from "../../Api/payload";

const Home = (props) => {
  const [value, setValue] = useState("");

  const [model, setModel] = useState(null);
  const [models, setModels] = useState([]);

  const [language, setLanguage] = useState(null);
  const [languages, setLanguages] = useState([]);

  const [data, setData] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const payload = payloadGenerator.getModels();
    const fetchModels = async () => {
      const res = await api(payload);
      setModels(res);
    };
    fetchModels();
  }, []);

  useEffect(() => {
    const payload = payloadGenerator.getSupportedLanguages({ model: model });
    const fetchLanguages = async () => {
      const res = await api(payload);
      setLanguages(res);
    };
    if (model) {
      fetchLanguages();
    }
  }, [model]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!model || !language) {
      alert("Please select both model and language");
      return;
    }
    const payload = payloadGenerator.getEntitesPayload({
      text: value,
      language: language,
      model: model,
    });
    const res = await api(payload);
    setData(res);
  };

  const onModelClick = (e) => {
    setModel(e.target.value);
    setLanguage(null);
  };

  const onLanguageClick = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="panel-container">
        <LeftPanelContainer
          model={model}
          models={models}
          language={language}
          languages={languages}
          value={value}
          handleSubmit={handleSubmit}
          onChange={onChange}
          onModelClick={onModelClick}
          onLanguageClick={onLanguageClick}
        />
        <RightPanelContainer data={data} />
      </div>
      {data && (
        <div className="highlight-modal-button-container">
          <HighlightModal
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            data={data}
            text={value}
          />
          <Button variant="contained" color="success" onClick={handleOpen}>
            Open Inline View
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
