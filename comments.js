// Create web server and listen on port 3000

const express = require('express');
const app = express();
const port = 3000;

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.send('This is a route for comments');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});