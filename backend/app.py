from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/bmi', methods=['POST'])
def bmi():
    data = request.get_json()
    height = data['height']
    weight = data['weight']
    bmi = weight / ((height / 100) ** 2)
    return jsonify({"bmi": round(bmi, 2)})

if __name__ == '__main__':
    app.run(host='13.235.42.224', port=5000)
