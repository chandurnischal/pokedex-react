import requests
import os
from time import sleep
import json
import mysql.connector as mc
from random import randint
from tqdm import tqdm 


def saveImage(url:str, directory:str) -> None:
    response = requests.get(url, stream=True)

    if response.status_code != 200:
        print(response.status_code)
        return
    
    filename = os.path.join(directory, os.path.basename(url))

    with open(filename, "wb") as file:
        for chunk in response.iter_content(1024):
            file.write(chunk)

destination = "images"

if not os.path.exists(destination):
    os.mkdir(destination)

with open("creds.json") as file:
    creds = json.load(file)


with mc.connect(**creds) as conn:
    cursor = conn.cursor()
    query = "select imageURL from pokedex"
    cursor.execute(query)

    rows = cursor.fetchall()

rows = [row[0] for row in rows]


with open("errors.csv", "w") as error:
    error.write("row, success, cause\n")
    for row in tqdm(rows):
        try:
            saveImage(url=row, directory=destination)
            sleep(randint(1, 3))
            error.write("{}, True, None\n".format(row))
        except Exception as e:
            error.write("{}, False, {}\n".format(row, e.__class__))