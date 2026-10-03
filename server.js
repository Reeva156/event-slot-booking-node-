const express = require('express');
const dotenv = require('dotenv');
const connectDataBase = require('./src/db/db');


dotenv.config();


connectDataBase();

const app = express();

app.use(express.json());

app.use('/api/slots', require('./src/routes/slotRoute'));
app.use('/api/bookings', require('./src/routes/bookingRoute'));

app.get('/bookings', (req, res) => {
    res.send('Event Slot Booker API is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});