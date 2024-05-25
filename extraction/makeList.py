import json
import mysql.connector as mc

with open("./extraction/creds.json") as file:
    creds = json.load(file)

with mc.connect(**creds) as conn:
    cur = conn.cursor()

    cur.execute("select * from pokedex")

    rows = cur.fetchall()


pokedex = []

for row in rows:
    pokemon = {
        "url": row[0], "id": row[1], "name": row[2], "type": row[3].split(' '), "total": row[4], "hp": row[5], "attack": row[6], "defence": row[7], "special_attack": row[8], "special_defence": row[9], "speed": row[10]
    }
    pokedex.append(pokemon)

jsContent = "export const pokedex = {};".format(json.dumps(pokedex, indent=2))

with open("pokedex-react/src/pokedex.js", "w") as file:
    file.write(jsContent)

print("""
'pokedex.js' has been successfully created!
""")