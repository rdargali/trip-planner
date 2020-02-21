import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import { useEffect, useState } from "react";
import { FormHelperText } from "@material-ui/core";
const token = localStorage.getItem("jsonwebtoken");

export default function EditTrip(props) {
  const [trip, setTrip] = useState([]);
  const tripId = props.match.params.id;

  useEffect(() => {
    axios
      .get("http://localhost:5000/trips/" + tripId, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
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
      <br />
      <div className="updateTripForm">
        <div>
          {/* <label>New Destination</label>{" "} */}
          <InputLabel shrink id="demo-simple-select-filled-label">
            New Destination
          </InputLabel>
          <TextField
            required
            id="outlined-basic"
            value={trip.destination}
            onChange={onHandleChange}
            type="text"
            name="destination"
          />
        </div>
        <br />
        <div>
          {/* <label>New Date</label> */}
          <InputLabel shrink id="demo-simple-select-filled-label">
            New Date
          </InputLabel>
          <TextField
            value={trip.date}
            onChange={onHandleChange}
            type="date"
            name="date"
          />
        </div>
        <br />
        <div>
          {/* <label>New Return Date</label>{" "} */}
          <InputLabel shrink id="demo-simple-select-filled-label">
            New Return Date
          </InputLabel>
          <TextField
            value={trip.returndate}
            onChange={onHandleChange}
            type="date"
            name="returndate"
          />
        </div>
        <br />
        <div>
          {/* <label>New Type</label>{" "} */}
          <InputLabel shrink id="demo-simple-select-filled-label">
            New Trip Type
          </InputLabel>
          <Select
            id="editSelect"
            helperText="New Type"
            value={trip.triptype}
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
          {/* <label>New Flight</label>{" "} */}
          <InputLabel shrink id="demo-simple-select-filled-label">
            New Flight
          </InputLabel>
          <TextField
            value={trip.flight}
            onChange={onHandleChange}
            type="text"
            name="flight"
          />
        </div>
        <br />
        <div>
          {/* <label>New Hotel</label> */}
          <InputLabel shrink id="demo-simple-select-filled-label">
            New Hotel
          </InputLabel>
          <TextField
            value={trip.hotel}
            onChange={onHandleChange}
            type="text"
            name="hotel"
          />
        </div>
        <br />
        <div>
          {/* <label>New Notes</label> */}
          <InputLabel shrink id="demo-simple-select-filled-label">
            New Notes
          </InputLabel>
          <TextField
            value={trip.notes}
            onChange={onHandleChange}
            type="text"
            name="notes"
          />
        </div>
        <br />
      </div>
      <Button variant="contained" color="primary" onClick={onHandleUpdateTrip}>
        Update Trip
      </Button>
    </div>
  );
}
