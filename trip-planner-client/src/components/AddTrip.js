import React from "react";
import "../App.css";

export default function AddTrip() {
  return (
    <div>
      <h3>Add Trip</h3>
      <div className="addTripForm">
        <div>
          <span>Destination</span> <input type="text" name="destination" />
        </div>
        <div>
          <span>Date</span> <input type="date" name="date" />
        </div>
        <div>
          <span>Return Date</span> <input type="date" name="return-date" />
        </div>
        <div>
          <span>Type</span> <input type="text" name="trip-type" />
        </div>
        <div>
          <span>Flight</span> <input type="text" name="flight" />
        </div>
        <div>
          <span>Hotel</span> <input type="text" name="hotel" />
        </div>
        <div>
          <span>Notes</span> <input type="text" name="notes" />
        </div>
        <button>Add Trip</button>
      </div>
    </div>
  );
}
