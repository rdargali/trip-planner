import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

const token = localStorage.getItem("jsonwebtoken");
console.log(token);
function ViewTrip() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:5000/trips", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => setTrips(response.data));
    } else setTrips([]);
  }, []);

  const handleDelete = tripId => {
    if (window.confirm("Are you sure you wish to delete this trip?")) {
      const token = localStorage.getItem("jsonwebtoken");
      axios
        .delete("http://localhost:5000/trips/" + tripId, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
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
            <th>Notes</th>
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
                <td>{trip.notes}</td>

                <td>
                  <Button
                    color="primary"
                    variant="contained"
                    href={"/view/" + trip._id}
                  >
                    Edit
                  </Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => handleDelete(trip._id)}
                  >
                    Delete
                  </Button>
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
