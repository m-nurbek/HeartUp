from fastapi import FastAPI, UploadFile, HTTPException, File
from starlette.responses import FileResponse
import uvicorn
import pickle
import cv2
import sklearn
import os


if os.path.exists('src/main.py'):
    # Running locally
    BASE_DIR = os.path.abspath('.')
else:
    # Running tests
    BASE_DIR = os.path.abspath(os.path.join(os.getcwd(), '..'))


app = FastAPI()


def image_to_feature_vector(image_path, size=(64, 64)):
    return cv2.resize(image_path, size).flatten()


with open(os.path.abspath(os.path.join(BASE_DIR, 'src/model.pkl')), 'rb') as file:
    CLF = pickle.load(file)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.post('/predict')
async def predict(image: UploadFile = File(...)):
    try:
        if not image.content_type.startswith('image/'):
            raise HTTPException(status_code=400,
                                detail=f"File 'f{image.filename}' is not an image.")
        with open(os.path.abspath(os.path.join(BASE_DIR, f'images/{image.filename}')), 'wb') as f:
            f.write(await image.read())

        cv2img = cv2.imread(os.path.abspath(os.path.join(BASE_DIR, f'images/{image.filename}')))
        pixels = image_to_feature_vector(cv2img)
        prediction = CLF.predict([pixels, ])[0]

        return {'filename': image.filename, 'prediction': prediction}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
