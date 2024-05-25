import pandas as pd
from bs4 import BeautifulSoup 
from sqlalchemy import create_engine
import json

def getRow(row):

    tds = row.find_all("td")
    imageURL = tds[0].find("img").get("src")

    res = {"imageURL": imageURL, "ID": tds[0].text.strip(), "name": tds[1].text.strip(), "type": tds[2].text.strip(), "total": tds[3].text.strip(), "HP": tds[4].text.strip(), "attack": tds[5].text.strip(), "defence": tds[6].text.strip(), "special_attack": tds[7].text.strip(), "special_defence": tds[8].text.strip(), "speed": tds[9].text.strip()}


    return res


with open("pokedex.html", "r", encoding="utf-8") as file:
    text = file.read()

soup = BeautifulSoup(text, "lxml")

table = soup.find("table", id="pokedex")
tbody = table.find("tbody")
rows = tbody.find_all("tr")

results = []

for i, row in enumerate(rows):
    try:
        res = getRow(row)
        results.append(res)
    except Exception as e:
        print(i, e.__class__)

data = pd.DataFrame(results)

stats = ["ID", "total", "HP", "attack", "defence", "special_attack", "special_defence", "speed"]

data = data.apply(pd.to_numeric, errors = "ignore")

for col in data.columns:
    if col not in stats:
        data[col] = data[col].astype(str)

with open("creds.json") as file:
    creds = json.load(file)

engine = create_engine("mysql+mysqlconnector://{}:{}@{}:{}/{}".format(creds["username"], creds["password"], creds["host"], creds["port"], creds["database"]))

data.to_sql("pokedex", con=engine, if_exists="replace", index=False)