const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));

// Import necessary modules and setup the Express app
require('./db/conn');


const PORT = process.env.PORT || 8080; // Replace 8080 with your desired port number

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Render the home page
app.get('/', (req, res) => {
  res.render('index');
});
app.listen(PORT, () => {
  console.log(`Server is running at port no ${PORT}`);
});
