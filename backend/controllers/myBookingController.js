const CarBooking = require("../models/CarBooking");
const Booking = require("../models/Booking");

exports.getMyBookings = async (req, res) => {
  try {
    const userId = req.user._id;

    const carBookings = await CarBooking.find({ user: userId }).sort({ createdAt: -1 });

    const hotelBookings = await Booking.find({ user: userId }).sort({ createdAt: -1 });

    res.json({
      carBookings,
      hotelBookings
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};