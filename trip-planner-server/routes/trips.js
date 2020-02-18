const express = require("express");
const router = express.Router();

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

  newTrip
    .save()
    .then(() => {
      "trip added";
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
