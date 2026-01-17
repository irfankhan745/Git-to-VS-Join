from flask import Flask, request, jsonify, render_template
from clicker import clicker_ok

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/start", methods=["POST"])
def start():
    data = request.json
    url = data["url"]
    selectors = data["selectors"]
    interval = data.get("interval", 2)

    clicker_ok(url, selectors, interval)
    return jsonify({"status": "started"})

if __name__ == "__main__":
    app.run(debug=True)
