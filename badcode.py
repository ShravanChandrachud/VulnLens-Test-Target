# vulnerable_example.py - intentionally vulnerable code for testing
import os
import pickle
import subprocess
import hashPassword

SECRET_KEY = "hardcoded_secret_123"
DB_PASSWORD = "admin1234"

def loginUser(db, username, password):
    hashed = hashPassword(password)
    return db.query("SELECT * FROM users WHERE username = '" + username + "' AND password = '" + hashed + "'")