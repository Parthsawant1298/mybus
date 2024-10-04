const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const From = require('./model/from'); // Ensure the correct model path

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
require('./db/conn');

// Set up EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve form page
app.get('/', (req, res) => {
  res.render('from'); // Renders 'from.ejs' in 'views'
});

// Handle form submission
app.post('/form', (req, res) => {
  const { origin, destination, departureDate, returnDate, passengers, 'ac-preference': acPreference , 'phone': phone } = req.body;

  console.log(`Origin: ${origin}, Destination: ${destination}, Departure: ${departureDate}, Return: ${returnDate}, Passengers: ${passengers}, AC Preference: ${acPreference}, Phone: ${phone}`);

  // Create a new form entry
  const newFormEntry = new From({ origin, destination, departureDate, returnDate, passengers, acPreference, phone });
  
  newFormEntry.save()
    .then(() => res.redirect('thank.html'))
    .catch(err => res.status(500).send('Error saving request.'));
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
