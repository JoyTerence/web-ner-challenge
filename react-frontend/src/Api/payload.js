export const getEntitesPayload = ({ language, model, text }) => {
  return {
    method: "POST",
    url: "/get_entities",
    headers: { "Content-Type": "application/json" },
    data: {
      text: text,
      language: language,
      model: model,
    },
  };
};

export const getSupportedLanguages = ({ model }) => {
  return {
    method: "POST",
    url: "/get_supported_languages",
    headers: { "Content-Type": "application/json" },
    data: {
      model: model,
    },
  };
};

export const getModels = () => {
  return {
    method: "GET",
    url: "/get_models",
    headers: { "Content-Type": "application/json" },
  };
};
