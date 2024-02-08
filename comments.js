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
// Path: index.js
// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// Path: posts.js
// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the posts
app.get('/posts', (req, res) => {
  res.send('This is a route for posts');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// Path: users.js
// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the users
app.get('/users', (req, res) => {
  res.send('This is a route for users');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// Path: index.js
// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.send('This is a route for comments');
});

// Create a route for the posts
app.get('/posts', (req, res) => {
  res.send('This is a route for posts');
});

// Create a route for the users
app.get('/users', (req, res) => {
  res.send('This is a route for users');
});