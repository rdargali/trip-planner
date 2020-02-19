const express = require("express");
const router = express.Router();
const Trip = require("../models/trip.model");

router.get("/", (req, res) => {
  Trip.find()
    .then(trips => res.json(trips))
    .catch(err => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  const destination = req.body.destination;
  const date = req.body.date;
  const returndate = req.body.returndate;
  const triptype = req.body.triptype;
  const flight = req.body.flight;
  const hotel = req.body.hotel;
  const notes = req.body.notes;

  const newTrip = new Trip({
    username,
    destination,
    date,
    returndate,
    triptype,
    flight,
    hotel,
    notes
  });
  // console.log(newTrip);
  newTrip
    .save()
    .then(() => {
      res.json("trip added");
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
  Trip.findById(req.params.id).then(
    trip => res.json(trip)
    // .catch(err => res.status(400).json("Error: " + err))
  );
});

router.delete("/:id", (req, res) => {
  Trip.findByIdAndDelete(req.params.id).then(() =>
    res.json("trip deleted").catch(err => res.status(400).json("Error: " + err))
  );
});

router.post("/update/:id", (req, res) => {
  Trip.findById(req.params.id)
    .then(trip => {
      trip.destination = req.body.destination;
      trip.date = Date.parse(req.body.date);
      trip.returndate = Date.parse(req.body.returndate);
      trip.triptype = req.body.triptype;
      trip.flight = req.body.flight;
      trip.hotel = req.body.hotel;
      trip.notes = req.body.notes;

      trip
        .save()
        .then(() => res.json("trip updated"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
