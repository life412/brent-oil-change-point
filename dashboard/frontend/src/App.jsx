
import React from "react";
import PriceChart from "./components/PriceChart";
import EventHighlights from "./components/EventHighlights";

function App() {
  return (
    <div>
      <h1>Brent Oil Price Dashboard</h1>
      <PriceChart />
      <EventHighlights />
    </div>
  );
}

export default App;
