import React from "react";
import "../App.css";
import { useState } from "react";
import axios from "axios";

export default function AddTrip() {
  const [trip, setTrip] = useState({
    destination: "",
    date: new Date(),
    returndate: new Date(),
    triptype: "",
    flight: "",
    hotel: "",
    notes: "",
    username: ""
  });

  const onHandleChange = e => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value
    });
  };

  const onHandleAddTrip = e => {
    let newTrip = {
      username: "rawand",
      destination: trip.destination,
      date: trip.date,
      returndate: trip.returndate,
      triptype: trip.triptype,
      flight: trip.flight,
      hotel: trip.hotel,
      notes: trip.notes
    };

    // console.log(newTrip);
    axios
      .post("http://localhost:5000/trips/add", newTrip)
      .then(res => console.log(res.data));
  };

  return (
    <div>
      <h2 className="title">Add Trip</h2>
      <div className="addTripForm">
        <div>
          <label>Destination</label>{" "}
          <input onChange={onHandleChange} type="text" name="destination" />
        </div>
        <div>
          <label>Date</label>{" "}
          <input onChange={onHandleChange} type="date" name="date" />
        </div>
        <div>
          <label>Return Date</label>{" "}
          <input onChange={onHandleChange} type="date" name="returndate" />
        </div>
        <div>
          <label>Type</label>{" "}
          <select onChange={onHandleChange} type="text" name="triptype">
            <option value="none" selected disabled hidden>
              Flying or Driving?
            </option>
            <option value="Flight">Flight</option>
            <option value="Drive">Drive</option>
          </select>
        </div>
        <div>
          <label>Flight</label>{" "}
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
      <button onClick={onHandleAddTrip}>Add Trip</button>
    </div>
  );
}
