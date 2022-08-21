import React from "react";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";

import LeftPanelContainer from "../../Components/leftpanel";
import RightPanelContainer from "../../Components/rightpanel";

import HighlightModal from "../../Components/modal";

import api from "../../Api/api";

import "./index.css";

const Home = (props) => {
  const [value, setValue] = useState("");

  const [model, setModel] = useState(null);
  const [models, setModels] = useState([]);

  const [language, setLanguage] = useState(null);
  const [languages, setLanguages] = useState([]);

  const [nerData, setNerData] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const payload = {
      method: "GET",
      url: "/get_models",
      headers: { "Content-Type": "application/json" },
    };
    const fetchModels = async () => {
      const res = await api(payload);
      setModels(res);
    };
    fetchModels();
  }, []);

  useEffect(() => {
    const payload = {
      method: "POST",
      url: "/get_supported_languages",
      headers: { "Content-Type": "application/json" },
      data: {
        model: model,
      },
    };
    const fetchLanguages = async () => {
      const res = await api(payload);
      setLanguages(res);
    };
    if (model) {
      console.log(model);
      fetchLanguages();
    }
  }, [model]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(model, language);
    if (!model || !language) {
      alert("Please select both model and language");
      return;
    }
    const payload = {
      method: "POST",
      url: "/get_entities",
      headers: { "Content-Type": "application/json" },
      data: {
        text: value,
        language: language,
        model: model,
      },
    };
    const res = await api(payload);
    //  TODO: error
    setNerData(res);
  };

  const onModelClick = (e) => {
    setModel(e.target.value);
  };

  const onLanguageClick = (e) => {
    setLanguage(e.target.value);
  };

  console.log(nerData);
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
        <RightPanelContainer nerData={nerData} />
      </div>
      {nerData && (
        <div>
          <HighlightModal
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            nerData={nerData}
            text={value}
          />
          <Button variant="contained" color="success" onClick={handleOpen}>
            Open Modal
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
