import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function PriceChart() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/prices")
      .then(res => res.json())
      .then(json => {
        setData({
          labels: json.map(d => d.Date),
          datasets: [
            {
              label: "Brent Oil Price",
              data: json.map(d => d.Price),
              borderColor: "blue",
              fill: false
            }
          ]
        });
      });
  }, []);

  return (
    <div>
      <h2>Price Over Time</h2>
      <Line data={data} />
    </div>
  );
}

export default PriceChart;
