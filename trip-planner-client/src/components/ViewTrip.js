import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewTrip() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/trips")
      .then(response => setTrips(response.data));
  }, []);

  return (
    <div>
      <h2 className="title">My Trips</h2>
      <br />
      <hr />
      <br />
      {trips.map(trip => {
        return (
          <div>
            <ul className="tripsList">
              <li>
                <label>Destination: </label> {trip.destination}
              </li>
              <li>
                <label>From: </label>
                {trip.date}
              </li>
              <li>
                <label>To: </label>
                {trip.returndate}
              </li>
              <li>
                <label>Type: </label>
                {trip.triptype}
              </li>
              <li>
                <label>Flight: </label>
                {trip.flight}
              </li>
              <li>
                <label>Hotel: </label>
                {trip.hotel}
              </li>
              <li>
                <label>Notes: </label>
                {trip.notes}
              </li>

              {/* <Link to={buildUpdateURL(book.id)}>Update</Link> */}
            </ul>
            <br />
            <hr />
            <br />
          </div>
        );
      })}
      <br />
      <br />
    </div>
  );
}
