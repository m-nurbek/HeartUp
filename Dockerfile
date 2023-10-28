FROM python:3.11-slim
RUN pip install --no-cache-dir -r /app/requirements.txt
COPY . .
WORKDIR /app/
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]