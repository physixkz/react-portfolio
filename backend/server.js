const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const submitFormRoute = require('./routes/api/submitForm');

const app = express();

app.use(bodyParser.json());

// Use CORS middleware
app.use(cors());

// Use the submitForm route
app.use('/submitForm', submitFormRoute);


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
