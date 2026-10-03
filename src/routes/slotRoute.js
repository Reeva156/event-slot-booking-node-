const express = require('express');
const router = express.Router();


const {
    createSlot,
    getAllSlots,
    getSlotById,
    updateSlot,
    deleteSlot
} = require('../controllers/slotController');

router.post('/create-slot', createSlot);

router.get('/all-slots', getAllSlots);

router.get('/single-slot/:id', getSlotById);

router.put('/update-slot/:id', updateSlot);

router.delete('/delete-slot/:id', deleteSlot);

module.exports = router;