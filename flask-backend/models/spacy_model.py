from dataclasses import is_dataclass
import spacy

LANG_TO_CODE_MAP = {
    "English": "en_core_web_sm",
    "French": "fr_core_news_sm"
}


class SpacyModel():

    def get_supported_languages(self):
        return list(LANG_TO_CODE_MAP.keys())

    def get_lang_code(self, language):
        return LANG_TO_CODE_MAP.get(language, None)

    def is_language_supported(self, language):
        return language in self.get_supported_languages()

    def get_entities(self, text, language):
        if not self.is_language_supported(language):
            # TODO: handle error
            pass
        engine = spacy.load(self.get_lang_code(language))
        result = engine(text)
        response = {}
        if result.ents:
            for ent in result.ents:
                response[ent.text] = {"label": ent.label_,
                                      "description": spacy.explain(ent.label_)}
        return response