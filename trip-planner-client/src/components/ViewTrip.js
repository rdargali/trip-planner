import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-dom";

function ViewTrip() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/trips")
      .then(response => setTrips(response.data));
  }, []);

  const handleDelete = tripId => {
    if (window.confirm("Are you sure you wish to delete this trip?")) {
      axios
        .delete("http://localhost:5000/trips/" + tripId)
        .then(res => console.log(res.data));

      window.location.href = "/view";
    } else {
      console.log("not deleted");
    }
  };

  return (
    <div>
      <h2 className="title">My Trips</h2>
      <table>
        <thead>
          <tr>
            <th>Destination</th>
            <th>Date</th>
            <th>Return Date</th>
            <th>Trip Type</th>
            <th>Flight</th>
            <th>Hotel</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trips.map(trip => {
            return (
              <tr key={trip._id}>
                <td>{trip.destination}</td>
                <td>{trip.date}</td>
                <td>{trip.returndate}</td>
                <td>{trip.triptype}</td>
                <td>{trip.flight}</td>
                <td>{trip.hotel}</td>

                <td>
                  <a href={"/view/" + trip._id}>Edit</a> |
                  <a onClick={() => handleDelete(trip._id)}>Delete</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTrip;
