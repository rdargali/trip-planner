import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { useEffect, useState } from "react";

export default function EditTrip(props) {
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    const tripId = props.match.params.id;
    console.log(tripId);
    axios
      .get("http://localhost:5000/trips/" + tripId)
      .then(response => setTrip(response.data));
  }, []);

  const onHandleChange = e => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value
    });
  };
  // const history = useHistory();

  const onHandleUpdateTrip = e => {
    const tripId = props.match.params.id;

    let updateTrip = {
      // username: "rawand",
      destination: trip.destination,
      date: trip.date,
      returndate: trip.returndate,
      triptype: trip.triptype,
      flight: trip.flight,
      hotel: trip.hotel,
      notes: trip.notes
    };

    // console.log(updateTrip);
    axios
      .post("http://localhost:5000/trips/update/" + tripId, updateTrip)
      .then(res => console.log(res.data));

    // history.push("/view");
    window.location.href = "/view";
  };

  return (
    <div>
      <h2>Edit {trip.destination} trip</h2>

      <div className="updateTripForm">
        <div>
          <label>New Destination</label>{" "}
          <input
            value={trip.destination}
            onChange={onHandleChange}
            type="text"
            name="destination"
          />
        </div>
        <div>
          <label>New Date</label>{" "}
          <input
            value={trip.date}
            onChange={onHandleChange}
            type="date"
            name="date"
          />
        </div>
        <div>
          <label>New Return Date</label>{" "}
          <input
            value={trip.returndate}
            onChange={onHandleChange}
            type="date"
            name="returndate"
          />
        </div>
        <div>
          <label>New Type</label>{" "}
          <select
            value={trip.triptype}
            onChange={onHandleChange}
            type="text"
            name="triptype"
          >
            <option value="none" selected disabled hidden>
              Flying or Driving?
            </option>
            <option value="Flight">Flight</option>
            <option value="Drive">Drive</option>
          </select>
        </div>
        <div>
          <label>New Flight</label>{" "}
          <input
            value={trip.flight}
            onChange={onHandleChange}
            type="text"
            name="flight"
          />
        </div>
        <div>
          <span>New Hotel</span>{" "}
          <input
            value={trip.hotel}
            onChange={onHandleChange}
            type="text"
            name="hotel"
          />
        </div>
        <div>
          <span>New Notes</span>{" "}
          <input
            value={trip.notes}
            onChange={onHandleChange}
            type="text"
            name="notes"
          />
        </div>
      </div>
      <button onClick={onHandleUpdateTrip}>Update Trip</button>
    </div>
  );
}
