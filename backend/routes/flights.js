const express = require("express");
const router = express.Router();
const Flight = require("../models/Flight");

router.get("/", async (req, res) => {
  try {
    const { from, to, date, luggage, tripType } = req.query;

    let filter = {};

    if (from) filter.fromCity = from;
    if (to) filter.toCity = to;
    if (date) filter.departDate = new Date(date);
    if (tripType) filter.tripType = tripType;
    if (luggage === "true") filter.hasLuggage = true;

    const flights = await Flight.find(filter);

    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
