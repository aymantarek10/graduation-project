const express = require("express");
const router = express.Router();
const {
  createFlightBooking,
} = require("../controllers/flightBookingController");

router.post("/", createFlightBooking);

module.exports = router;
