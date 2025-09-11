# app.py
from flask import Flask, jsonify, render_template, request, redirect, url_for, flash
from flask_cors import CORS


app = Flask(__name__)
app.secret_key = "supersecretkey"   
CORS(app, origins=["http://localhost:4200"]) 

WHATSAPP_NUMBER = "8299223935"

# ---------- API Routes (for Angular) ------------

@app.get("/api/hello")
def hello():
    return jsonify(message="Hello from Flask API")


# ---------------- Run App ----------------
if __name__ == "__main__":
    print("Available routes:", app.url_map)
    app.run(host="0.0.0.0", port=5000, debug=True)

