const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

// Load config
dotenv.config({ path: './config/config.env' })

const app = express();

// route/endpoint for the server
app.get('/test', (req, res) => {
   // do something here
   fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => res.json(json))
});

// define port for the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log("Server started on port " + PORT);
});