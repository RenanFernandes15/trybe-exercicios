import requests

response = requests.get("https://httpbin.org/encoding/utf8")

print("=-=" * 50 + "\n\n")
print(response.text)
print("=-=" * 50 + "\n\n")
