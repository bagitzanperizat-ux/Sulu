const express = require('express');
const path = require('path'); 
const fs = require('fs');
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

  const { name, email, message } = req.body;

  // Object to save
  const formData = {
    name,
    email,
    message,
    date: new Date().toISOString()
  };

  const filePath = path.join(__dirname, 'messages.json');

  // Read existing data (if file exists)
  fs.readFile(filePath, 'utf8', (err, data) => {
    let messages = [];

    if (!err && data) {
      messages = JSON.parse(data);
    }

    messages.push(formData);

    // Write updated data back to file
    fs.writeFile(filePath, JSON.stringify(messages, null, 2), (err) => {
      if (err) {
        console.error('Error saving data:', err);
        return res.status(500).send('Error saving message');
      }

      res.send(`<h2>Thanks, ${name}! Your message has been received.</h2>`);
    });
  });
});


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});