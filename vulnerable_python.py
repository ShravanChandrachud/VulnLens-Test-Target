# vulnerable_example.py - intentionally vulnerable code for testing
import os
import pickle
import subprocess

SECRET_KEY = "hardcoded_secret_123"
DB_PASSWORD = "admin1234"

def run_command(user_input):
    # Command injection
    os.system("echo " + user_input)

def deserialize(data):
    # Unsafe deserialization
    return pickle.loads(data)

def query_user(username):
    # SQL injection
    query = "SELECT * FROM users WHERE name = '" + username + "'"
    return query

def get_file(path):
    # Path traversal
    with open("/var/data/" + path, "r") as f:
        return f.read()