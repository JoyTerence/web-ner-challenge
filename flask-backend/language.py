
# TODO: Add Typing checks and pip8 style

def get_supported_languages(model):
    if model == "spacy":
        return ["English, French"]
    else:
        return None

SPACY_LANG_TO_CODE_MAP = {
    "English": "en_core_web_sm",
    "French": "fr_core_news_sm"
}

def get_spacy_lang_code(language):
    return SPACY_LANG_TO_CODE_MAP.get(language, None)