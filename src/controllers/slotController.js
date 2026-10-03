const EventSlot = require('../models/eventSlot');


exports.createSlot = async (req, res) => {
  try {
    const slot = await EventSlot.create(req.body);
    res.status(201).json(slot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSlots = async (req, res) => {
  try {
    const slots = await EventSlot.find();
    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSlotById = async (req, res) => {
  try {
    const slot = await EventSlot.findById(req.params.id);
    if (!slot) {
      return res.status(404).json({ message: 'Slot not found' });
    }
    res.status(200).json(slot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSlot = async (req, res) => {
  try {
    const slot = await EventSlot.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!slot) {
      return res.status(404).json({ message: 'Slot not found' });
    }
    res.status(200).json(slot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSlot = async (req, res) => {
  try {
    const slot = await EventSlot.findByIdAndDelete(req.params.id);
    if (!slot) {
      return res.status(404).json({ message: 'Slot not found' });
    }
    res.status(200).json({ message: 'Slot deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};