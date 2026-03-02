const mongoose = require("mongoose");

const flightBookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false, // لو عندك auth خليها true
  },

  // Flight Details
  fromCity: { type: String, required: true },
  toCity: { type: String, required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date },
  tripType: { type: String, required: true },

  // Passenger Details
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  passportNumber: { type: String, required: true },
  passportExpiry: { type: Date, required: true },

  // Contact Info
  email: { type: String, required: true },
  phone: { type: String, required: true },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FlightBooking", flightBookingSchema);
