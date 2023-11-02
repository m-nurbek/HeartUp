from fastapi.testclient import TestClient
import requests
from src.main import app

client = TestClient(app)

base_url = "http://127.0.0.1:8000/"


# response = requests.post(url, headers=headers, files=files)
# print(response.text)
def test_root():
    response = client.get(base_url)
    assert response.status_code == 200


def test_predict():
    url = base_url + "/predict"
    files = {"image": (r"D:\GitHub\HeartUp\images\extra1.png", open(r"D:\GitHub\HeartUp\images\extra1.png", "rb"), "image/png")}
    headers = {"accept": "application/json"}
    response = client.post(url, headers=headers, files=files)
    assert True
