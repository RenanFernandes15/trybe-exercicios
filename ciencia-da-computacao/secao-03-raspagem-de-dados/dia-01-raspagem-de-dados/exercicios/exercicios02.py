import requests


with requests.get("https://api.github.com/users") as response:
    data = response.json()
    index = 1
    print("|--------------------------------------------------------------|")
    for user in data:
        print(f"""| {index} - {user["login"]} {user["url"]}""")
        print(
            "|--------------------------------------------------------------|"
        )
        index += 1
