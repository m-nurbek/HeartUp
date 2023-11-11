import os

if os.path.exists('src/main.py'):
    # Running locally
    BASE_DIR = os.path.abspath('.')
else:
    # Running tests
    BASE_DIR = os.path.abspath(os.path.join(os.getcwd(), '..'))

