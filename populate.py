import requests
import json
url = "http://localhost:8082/medicos"
headers = {"content-type": "application/json", "Accept-Charset": "UTF-8", "transfer-encoding": "chunked"}

payload = open("medicos.json", "rb") 
data = payload

r = requests.post(url, data=payload, headers=headers, verify=False)

data = r.json()

print(data)