from .spacy_model import SpacyModel
from .text_api_model import TextApiModel

NAME_TO_MODEL_MAP = {
    "Spacy": SpacyModel(),
    "Text API": TextApiModel(),
}

def get_all_models():
    return list(NAME_TO_MODEL_MAP.keys())

def get_model(model_name):
    print (NAME_TO_MODEL_MAP)
    return NAME_TO_MODEL_MAP[model_name]

