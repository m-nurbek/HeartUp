FROM python:3.11-slim
RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y
WORKDIR /app/
COPY . .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]