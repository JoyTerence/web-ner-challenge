default:
	@echo "An explicit target is required"

install:
	cd $(FRONTEND) && npm install
	cd $(BACKEND) && pip install -r requirements.txt

start:
	cd $(FRONTEND) && npm run serve &
	cd $(BACKEND) && python -m spacy download en_core_web_sm && python -m spacy download fr_core_news_sm && flask --debug run
