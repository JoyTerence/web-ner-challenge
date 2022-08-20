import React from "react";
import { useState, useEffect } from "react";

import Editor from "../Components/editor";

import api from "../Api/api";
import Dropdown from "../Components/dropdown";

const Home = (props) => {
  const [value, setValue] = useState("");
  const [model, setModel] = useState(null);
  const [models, setModels] = useState([]);

  const [language, setLanguage] = useState(null);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const payload = {
      method: "GET",
      url: "/get_models"
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
      headers: {
        "Content-Type": "application/json",
      },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      method: "POST",
      url: "/get_entities",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        text: value,
        language: language,
        model: model,
      },
    };
    await api(payload);
  };

  const onModelClick = (e) => {
    console.log(e);
    setModel(e.value);
  };

  const onLanguageClick = (e) => {
    setLanguage(e.value);
  };

  return (
    <div>
      <Editor handleSubmit={handleSubmit} onChange={onChange} value={value} />
      {models && models.length ? (
        <Dropdown
          title={model ? model : "Choose a model"}
          items={models}
          onItemClick={onModelClick}
        />
      ) : (
        <span> "No models" </span>
      )}
      {models && models.length && languages && languages.length && (
        <Dropdown
          title={language ? language : "Choose language"}
          items={languages}
          onItemClick={onLanguageClick}
        />
      )}
    </div>
  );
};

export default Home;
