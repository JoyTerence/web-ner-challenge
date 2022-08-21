import { findAll } from "highlight-words-core";

const getAllMatching = (textToHighlight, searchWords, caseSensitive) => {
  return findAll({
    autoEscape: true,
    caseSensitive: caseSensitive,
    searchWords,
    textToHighlight,
  });
};

export default getAllMatching;
