import React from "react";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

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
      <h2 className="title">Add Trip</h2>
      <div className="addTripForm">
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
        <br />
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
        <br />
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
        <br />
        <div>
          {/* <label>Type</label> */}
          <InputLabel shrink id="demo-simple-select-filled-label">
            Trip Type
          </InputLabel>
          <Select
            id="editSelect"
            helperText="Trip Type"
            onChange={onHandleChange}
            type="text"
            name="triptype"
          >
            <MenuItem value="none" selected disabled>
              Flying or Driving?
            </MenuItem>
            <MenuItem value="Flight">Flight</MenuItem>
            <MenuItem value="Drive">Drive</MenuItem>
          </Select>
        </div>
        <br />
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
