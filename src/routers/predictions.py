from fastapi import APIRouter, HTTPException, UploadFile, File
from typing import Annotated
import numpy as np
import pickle
import cv2
import os

from src.settings import BASE_DIR


router = APIRouter()


def image_to_feature_vector(image_path, size=(64, 64)):
    return cv2.resize(image_path, size).flatten()


with open(os.path.abspath(os.path.join(BASE_DIR, 'src/ml_models/model.pkl')), 'rb') as file:
    CLF = pickle.load(file)


@router.post('/predict', tags=['ML prediction'])
async def predict(image: Annotated[UploadFile, File()] = ...):
    try:
        if not image.content_type.startswith('image/'):
            raise HTTPException(status_code=400, detail=f"File 'f{image.filename}' is not an image.")

        file_bytes = await image.read()  # read the file as bytes
        file_array = np.frombuffer(file_bytes, np.uint8)  # convert the bytes to a numpy array
        cv2img = cv2.imdecode(file_array, cv2.IMREAD_COLOR)

        pixels = image_to_feature_vector(cv2img)
        prediction = CLF.predict([pixels, ])[0]
        return {'filename': image.filename, 'prediction': prediction}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
