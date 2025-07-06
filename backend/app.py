from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/bmi', methods=['POST'])
def calculate_bmi():
    data = request.get_json()
    height = float(data['height']) / 100
    weight = float(data['weight'])
    bmi = weight / (height ** 2)
    return jsonify({"bmi": round(bmi, 2)})

if __name__ == "__main__":
    app.run(host="43.204.232.82", port=5000)
