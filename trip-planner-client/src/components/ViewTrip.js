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
console.log(token);

//comp
function ViewTrip() {
  const [trips, setTrips] = useState([]);

  //material ui table setup
  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 12
    }
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default
      }
    }
  }))(TableRow);

  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9)
  // ];

  const useStyles = makeStyles({
    table: {
      minWidth: 700
    }
  });

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

      window.location.href = "/view";
    } else {
      console.log("trip not deleted");
    }
  };

  const classes = useStyles();

  return (
    <div>
      {/* <h2 className="title">My Trips</h2> */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Destination</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Return Date</StyledTableCell>
              <StyledTableCell align="right">Type</StyledTableCell>
              <StyledTableCell align="right">Flight Notes</StyledTableCell>
              <StyledTableCell align="right">Hotel Notes</StyledTableCell>
              <StyledTableCell align="right">Additional Notes</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trips.map(trip => (
              <StyledTableRow key={trip.destination}>
                <StyledTableCell component="th" scope="row">
                  {trip.destination}
                </StyledTableCell>
                <StyledTableCell align="right">{trip.date}</StyledTableCell>
                <StyledTableCell align="right">
                  {trip.returndate}
                </StyledTableCell>
                <StyledTableCell align="right">{trip.triptype}</StyledTableCell>
                <StyledTableCell align="right">{trip.flight}</StyledTableCell>
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
