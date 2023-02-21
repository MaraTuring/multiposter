import spacy
from collections import Counter
from string import punctuation
import es_core_news_sm
import json

nlp = spacy.load("es_core_news_sm")
nlp = es_core_news_sm.load()

def get_hotwords(text):
    result = []
    pos_tag = ['PROPN', 'ADJ', 'NOUN']
    doc = nlp(text.lower())
    for token in doc:
        
        if(token.text in nlp.Defaults.stop_words or token.text in punctuation):
            continue
        
        if(token.pos_ in pos_tag):
            result.append(token.text)
                
    return result

output = get_hotwords('Mara Turing es nuestra heroína.\nCuriosa.\nInteligente.\nPerspicaz.\nConstante.\nUna mujer en un mundo (tradicionalmente) de hombres.\nUna niña en un mundo de adultos.\nUna joven destinada a cambiar su mundo… y el tuyo.')
print(json.dumps(output))