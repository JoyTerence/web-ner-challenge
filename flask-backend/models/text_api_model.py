from collections import defaultdict
import requests

from ..constants import *

LANG_TO_CODE_MAP = {
    "English": "en",
}

class TextApiModel():
    def __init__(self):
        self.headers = {
            "Content-Type": "application/json",
            "apikey": API_KEY
        }
        self.api_url = "https://app.thetextapi.com/text/ner"

    def get_supported_languages(self):
        return list(LANG_TO_CODE_MAP.keys())

    def get_lang_code(self, language):
        return LANG_TO_CODE_MAP.get(language, None)

    def is_language_supported(self, language):
        return language in self.get_supported_languages()

    def get_entities(self, text, language="English"):
        if not self.is_language_supported(language):
            raise ValueError("Invalid language passed")
        body = {
            "text" : text
        }
        response = {"label_to_word": defaultdict(list), "word_to_label": defaultdict(lambda: defaultdict(list))}
        print(requests.post(self.api_url, headers=self.headers, json=body).json())
        res = requests.post(self.api_url, headers=self.headers, json=body).json()["ner"]
        print (res)
        for entry in res:
            response["word_to_label"][entry[1]]["label"] = entry[0]
            response["label_to_word"][entry[0]].append(entry[1])
        return response
