// const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
const data = require('./Develop/db/db.json');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static('public'));

// This route  will serve up the `public/notes.html` page
app.get('/notes', (req, res)=>
  res.sendFile(path.join(__dirname, './Develop/public/notes.html'))
);

// This route  will serve up the `api/notes.html` page
app.get('/api/notes', (req, res) => res.json(data));

// This route  will serve up the `public/index.html` page and any other page that isnt /notes or /api/notes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
  });

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

//POST SECTION

// app.post()