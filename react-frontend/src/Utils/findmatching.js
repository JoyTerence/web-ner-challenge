import { findAll } from "highlight-words-core";


const getAllMatching = (textToHighlight, searchWords, caseSensitive) => {
    return findAll({
        caseSensitive: caseSensitive,
        searchWords,
        textToHighlight
      });
}

export default getAllMatching;