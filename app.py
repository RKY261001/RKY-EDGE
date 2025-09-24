from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error

# ----------------------------------------
# Flask setup
# ----------------------------------------
app = Flask(__name__)
app.secret_key = "supersecretkey"
CORS(app, resources={r"/api/*": {"origins": "http://localhost:4200"}})

# ----------------------------------------
# MySQL connection
# ----------------------------------------
db_config = {
    "host": "localhost",
    "user": "Rky_Edge",         # Your DB user
    "password": "Sql@1125$1511",
    "database": "rky_edge_db",
    "charset": "utf8mb4"
}

def get_connection():
    """Create a new DB connection for each request."""
    return mysql.connector.connect(**db_config)

# ----------------------------------------
# Routes
# ----------------------------------------

# 1️⃣ Contact form
@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json(silent=True)
    if not data:
        return jsonify({"ok": False, "error": "Invalid JSON"}), 400

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not (name and email and message):
        return jsonify({"ok": False, "error": "Missing fields"}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute(
            "INSERT INTO contacts (name, email, message) VALUES (%s, %s, %s)",
            (name, email, message)
        )
        conn.commit()
        inserted_id = cursor.lastrowid
        cursor.close()
        conn.close()
        return jsonify({"ok": True, "id": inserted_id})
    except Error as e:
        print("DB Error:", e)
        return jsonify({"ok": False, "error": str(e)}), 500

# 2️⃣ Get all contacts
@app.route("/api/contacts", methods=["GET"])
def get_contacts():
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM contacts ORDER BY created_at DESC")
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify({"ok": True, "contacts": rows})
    except Error as e:
        return jsonify({"ok": False, "error": str(e)}), 500

# 3️⃣ Users (example: signup)
@app.route("/api/signup", methods=["POST"])
def signup():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password_hash = data.get("password")  # You should hash this in production

    if not (name and email and password_hash):
        return jsonify({"ok": False, "error": "Missing fields"}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO users (name, email, password_hash) VALUES (%s, %s, %s)",
            (name, email, password_hash)
        )
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"ok": True})
    except Error as e:
        return jsonify({"ok": False, "error": str(e)}), 500

# 4️⃣ Products
@app.route("/api/products", methods=["GET"])
def get_products():
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM products ORDER BY created_at DESC")
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify({"ok": True, "products": rows})
    except Error as e:
        return jsonify({"ok": False, "error": str(e)}), 500

# 5️⃣ Categories
@app.route("/api/categories", methods=["GET"])
def get_categories():
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM categories ORDER BY name ASC")
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify({"ok": True, "categories": rows})
    except Error as e:
        return jsonify({"ok": False, "error": str(e)}), 500

# 6️⃣ Downloads
@app.route("/api/downloads", methods=["GET"])
def get_downloads():
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM downloads ORDER BY created_at DESC")
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify({"ok": True, "downloads": rows})
    except Error as e:
        return jsonify({"ok": False, "error": str(e)}), 500

# 7️⃣ Disclosures
@app.route("/api/disclosures", methods=["GET"])
def get_disclosures():
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM disclosures ORDER BY created_at DESC")
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify({"ok": True, "disclosures": rows})
    except Error as e:
        return jsonify({"ok": False, "error": str(e)}), 500

# ----------------------------------------
# Run the app
# ----------------------------------------
if __name__ == "__main__":
    print("Available routes:", app.url_map)
    app.run(host="0.0.0.0", port=5000, debug=True)
