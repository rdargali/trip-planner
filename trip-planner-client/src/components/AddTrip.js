import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

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
    console.log(e);
  };

  const onHandleAddTrip = e => {
    let newTrip = {
      username: "rawand",
      destination: trip.destination,
      date: trip.date,
      returndate: trip.returndate,
      triptype: trip.triptype,
      flight: (trip.flight = "" ? "N/A" : trip.flight),
      hotel: (trip.hotel = "" ? "N/A" : trip.hotel),
      notes: (trip.notes = "" ? "N/A" : trip.notes)
    };

    // console.log(newTrip);
    const token = localStorage.getItem("jsonwebtoken");
    axios
      .post("http://localhost:5000/trips/add", newTrip, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => console.log(res.data));
  };

  return (
    <div>
      <br />
      <h2 className="title">Add Trip</h2>
      <div className="addTripForm">
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          <div>
            {/* <label>Destination</label>{" "} */}
            <InputLabel shrink id="demo-simple-select-filled-label">
              Destination
            </InputLabel>
            <TextField
              required
              id="outlined-basic"
              onChange={onHandleChange}
              type="text"
              name="destination"
            />
          </div>

          <div>
            {/* <label>Type</label> */}
            <InputLabel shrink id="demo-simple-select-filled-label">
              Trip Type (Flying or Driving?)
            </InputLabel>
            <Select
              id="editSelect"
              helperText="Trip Type"
              onChange={onHandleChange}
              type="text"
              name="triptype"
            >
              <MenuItem disabled>Flying or Driving?</MenuItem>
              <MenuItem value="Flight">Flight</MenuItem>
              <MenuItem value="Drive">Drive</MenuItem>
            </Select>
          </div>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          <div>
            {/* <label>Date</label> */}
            <InputLabel shrink id="demo-simple-select-filled-label">
              Date
            </InputLabel>
            <TextField
              required
              id="outlined-basic"
              onChange={onHandleChange}
              type="date"
              name="date"
            />
          </div>

          <div>
            {/* <label>Return Date</label> */}
            <InputLabel shrink id="demo-simple-select-filled-label">
              Return Date
            </InputLabel>
            <TextField
              id="outlined-basic"
              onChange={onHandleChange}
              type="date"
              name="returndate"
            />
          </div>
        </div>
        <br />

        <br />
        <div
          style={{
            display: "flex"
          }}
        >
          <div>
            {/* <label>Flight</label> */}
            <InputLabel shrink id="demo-simple-select-filled-label">
              Flight Notes
            </InputLabel>
            <TextField
              id="outlined-basic"
              onChange={onHandleChange}
              type="text"
              name="flight"
            />
          </div>
          <br />
          <div>
            {/* <span>Hotel</span> */}
            <InputLabel shrink id="demo-simple-select-filled-label">
              Hotel Notes
            </InputLabel>
            <TextField
              id="outlined-basic"
              onChange={onHandleChange}
              type="text"
              name="hotel"
            />
          </div>
        </div>
        <br />
        <div>
          {/* <span>Notes</span> */}
          <InputLabel shrink id="demo-simple-select-filled-label">
            Additional Notes
          </InputLabel>
          <TextField
            id="outlined-basic"
            onChange={onHandleChange}
            type="text"
            name="notes"
          />
        </div>
        <br />
      </div>
      <Link to="/view">
        <Button variant="contained" color="primary" onClick={onHandleAddTrip}>
          Add Trip
        </Button>
      </Link>
    </div>
  );
}
