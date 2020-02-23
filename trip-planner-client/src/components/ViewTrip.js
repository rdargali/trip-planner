import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

//material ui tabke
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const token = localStorage.getItem("jsonwebtoken");

//material ui table setup
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 400
  }
});

//comp
function ViewTrip() {
  const [trips, setTrips] = useState([]);

  const classes = useStyles();

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
  }, [trips]);

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
    } else {
      console.log("trip not deleted");
    }
  };

  return (
    <div>
      {/* <h2 className="title">My Trips</h2> */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Destination</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Return Date</StyledTableCell>
              <StyledTableCell align="center">Type</StyledTableCell>
              <StyledTableCell align="center">Flight Notes</StyledTableCell>
              <StyledTableCell align="center">Hotel Notes</StyledTableCell>
              <StyledTableCell align="center">Additional Notes</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trips.map((trip, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center" scope="row">
                  {trip.destination}
                </StyledTableCell>
                <StyledTableCell align="center">{trip.date}</StyledTableCell>
                <StyledTableCell align="center">
                  {trip.returndate}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {trip.triptype}
                </StyledTableCell>
                <StyledTableCell align="center">{trip.flight}</StyledTableCell>
                <StyledTableCell align="center">{trip.hotel}</StyledTableCell>
                <StyledTableCell align="center">{trip.notes}</StyledTableCell>
                <StyledTableCell align="center">
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
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <table>
        {/* <thead>
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
        </tbody> */}
      </table>
    </div>
  );
}

export default ViewTrip;
