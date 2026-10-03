const mongoose = require("mongoose");

const eventSlotSchema = new mongoose.Schema({
    eventname: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    capacity: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["open", "closed"],
        default: "open"
    }
}, { timestamps: true });

module.exports = mongoose.model("EventSlot", eventSlotSchema);