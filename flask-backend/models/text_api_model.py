import requests

LANG_TO_CODE_MAP = {
    "English": "en",
}

class TextApiModel():
    def __init__(self):
        self.headers = {
            "Content-Type": "application/json",
            "apikey": "3542489b-d611-424b-915c-559667468749"
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
            # TODO: handle error
            pass
        body = {
            "text" : text
        }
        response = {}
        res = requests.post(self.api_url, headers=self.headers, json=body).json()["ner"]
        for entry in res:
            print(entry)
            response[entry[1]] = entry[0]
        return response
