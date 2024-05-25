import json
import mysql.connector as mc


with open("creds.json") as file:
    creds = json.load(file)

typeSet = set()

with mc.connect(**creds) as conn:
    cur = conn.cursor()

    cur.execute("select type from pokedex")

    rows = cur.fetchall()


for index, row in enumerate(rows):
    types = row[0].split(' ')

    for type in types:
        typeSet.add(type)


print(typeSet)