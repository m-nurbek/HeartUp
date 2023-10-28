from fastapi import FastAPI, UploadFile, HTTPException, File
from starlette.responses import FileResponse
import uvicorn
import pickle
import cv2
import models
import sklearn

app = FastAPI()

def image_to_feature_vector(image_path, size=(64, 64)):
    return cv2.resize(image_path, size).flatten()


with open('model.pkl', 'rb') as file:
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
        with open(f'images/{image.filename}', 'wb') as f:
            f.write(await image.read())
        print(image.filename)

        cv2img = cv2.imread(f'images/{image.filename}')
        pixels = image_to_feature_vector(cv2img)
        prediction = CLF.predict([pixels,])[0]

        return {'filename': image.filename, 'prediction': prediction}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# @app.get('/getprediction/{filename}')
# async def get_image(filename: str):
#     try:
#         # return FileResponse(f'images/{filename}')
#         return {'filename': filename, 'prediction': prediction}
#     except FileNotFoundError:
#         raise HTTPException(status_code=404,
#                             detail=f"Image '{filename}' not found")


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
