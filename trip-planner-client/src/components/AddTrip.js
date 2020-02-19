import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

export default function AddTrip() {
  const [trip, setTrip] = useState({
    trip: {
      destination: "",
      date: new Date(),
      returndate: new Date(),
      triptype: "",
      flight: "",
      hotel: "",
      notes: ""
    }
  });

  const onHandleChange = e => {
    setTrip({
      trip: {
        ...trip,
        [e.target.name]: e.target.value
      }
    });
  };

  const onHandleSubmit = e => {
    setTrip({
      trip: {
        destination: e.target.value,
        date: e.target.value,
        returndate: e.target.value,
        triptype: e.target.value,
        flight: e.target.value,
        hotel: e.target.value,
        notes: e.target.value
      }
    });
  };

  return (
    <div id="addTripWrapper">
      <h3>Add Trip</h3>
      <div className="addTripForm">
        <div>
          <span>Destination</span>{" "}
          <input onChange={onHandleChange} type="text" name="destination" />
        </div>
        <div>
          <span>Date</span>{" "}
          <input onChange={onHandleChange} type="date" name="date" />
        </div>
        <div>
          <span>Return Date</span>{" "}
          <input onChange={onHandleChange} type="date" name="returndate" />
        </div>
        <div>
          <span>Type</span>{" "}
          <input onChange={onHandleChange} type="text" name="triptype" />
        </div>
        <div>
          <span>Flight</span>{" "}
          <input onChange={onHandleChange} type="text" name="flight" />
        </div>
        <div>
          <span>Hotel</span>{" "}
          <input onChange={onHandleChange} type="text" name="hotel" />
        </div>
        <div>
          <span>Notes</span>{" "}
          <input onChange={onHandleChange} type="text" name="notes" />
        </div>
      </div>
      <button onClick={onHandleSubmit}>Add Trip</button>
    </div>
  );
}
