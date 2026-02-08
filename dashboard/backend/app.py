
from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

# Load processed data
df = pd.read_csv("../../data/raw/BrentOilPrices.csv")
df["Date"] = pd.to_datetime(df["Date"], dayfirst=True)

@app.route("/api/prices", methods=["GET"])
def get_prices():
    data = df[["Date", "Price"]].to_dict(orient="records")
    return jsonify(data)

@app.route("/api/logreturns", methods=["GET"])
def get_logreturns():
    df["LogReturn"] = df["Price"].apply(lambda x: pd.np.log(x)) - pd.np.log(df["Price"].shift(1))
    data = df.dropna()[["Date","LogReturn"]].to_dict(orient="records")
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
