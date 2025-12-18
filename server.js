const express = require('express');
const path = require('path'); 
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Contact page (GET)
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Contact form submission (POST)
app.post('/contact', (req, res) => {
  console.log('Form submission:', req.body);
  const { name } = req.body;

  res.send(`<h2>Thanks, ${name}! Your message has been received.</h2>`);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});