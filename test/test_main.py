from fastapi.testclient import TestClient
import os
from src.main import app
from src.settings import BASE_DIR


client = TestClient(app)
base_url = "http://127.0.0.1:8000/"


def test_root():
    response = client.get(base_url)
    assert response.status_code == 200


def test_predict():
    url = base_url + "predict"
    image_path = os.path.abspath(BASE_DIR / "images/1.png")

    files = {"image": (image_path, open(image_path, "rb"), "image/png")}
    headers = {"accept": "application/json"}
    response = client.post(url, headers=headers, files=files)
    assert response.status_code == 200
    assert list(response.json().keys()) == ['filename', 'prediction']
