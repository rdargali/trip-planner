import React from "react";

export default function ViewTrip() {
  return (
    <div>
      <h3>
        You have <span>10</span> trips planned
      </h3>

      <div className="tripsList">
        <ul>
          <li>Destination</li>
          <li>Date</li>
          <li>Type</li>
          <li>Flight</li>
          <li>Hotel</li>
          <li>Checklist</li>
        </ul>
      </div>
    </div>
  );
}
