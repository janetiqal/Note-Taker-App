const path = require("path")
const router = require("express").Router();


// This route  will serve up the `public/notes.html` page
router.get('/notes', (req, res)=>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// This route  will serve up the `public/index.html` page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// This route  will serve up the `public/index.html` page and any other page that isnt /notes or /api/notes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  module.exports=router;