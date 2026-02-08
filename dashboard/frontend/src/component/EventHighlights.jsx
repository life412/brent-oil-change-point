import React from "react";

const events = [
  { date: "2016-11-30", name: "OPEC production cut" },
  { date: "2020-03-11", name: "COVID-19 pandemic" },
  { date: "2022-02-24", name: "Russia invades Ukraine" }
];

function EventHighlights() {
  return (
    <div>
      <h2>Key Events</h2>
      <ul>
        {events.map((e, i) => (
          <li key={i}>{e.date}: {e.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventHighlights;
