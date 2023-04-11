import requests

with requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers"
) as response:
    print("\n")
    print("bot detected" not in response.text)
