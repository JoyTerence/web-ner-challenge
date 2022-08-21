from flask import Flask, jsonify, request
from flask_cors import CORS

from constants import *

from models import get_model, get_all_models

app = Flask(__name__)
CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/get_entities", methods=['POST'])
def get_entities():
    language = request.json.get("language", DEFAULT_LANG)
    model_name = request.json.get("model", DEFAULT_MODEL)
    text = request.json.get("text", "")

    try:
        model = get_model(model_name)
        res = model.get_entities(text, language)
        return jsonify(res)
    except ValueError as err:
        return "ValueError: " + str(err), 400
    except KeyError as err:
        return "KeyError: " + str(err), 400

@app.route("/get_models", methods=['GET'])
def get_models():
    models = get_all_models()
    return jsonify(models)

@app.route("/get_supported_languages", methods=['POST'])
def get_supported_languages():
    model_name = request.json.get("model", None)
    model = get_model(model_name)

    if not model_name:
        return jsonify([])

    languages = model.get_supported_languages()
    return jsonify(languages)





