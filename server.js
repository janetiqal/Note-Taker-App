const express = require('express');
const htmlRoutes= require("./routes/htmlroutes")
const routerAPI = require("./routes/apiroutes")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api/notes', routerAPI)
app.use('/', htmlRoutes)
// app.use('/notes', htmlRoutes)

// // This route  will serve up the `public/notes.html` page
// app.get('/notes', (req, res)=>
//   res.sendFile(path.join(__dirname, '/notes.html'))
// );

// This route  will serve up the `api/notes.html` page
// app.get('/api/notes', (req, res) => res.json(data));

// // This route  will serve up the `public/index.html` page and any other page that isnt /notes or /api/notes
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'));
//   });

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

// //POST SECTION

// app.post('/api/notes',  (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to add a note`);

// const { title, text } = req.body;
// if (title && text){
//   const newNote = {
//     title,
//     text,
//     // note_id= uuidv4()
//   };
//   const noteString = JSON.stringify(newNote);
//   fs.readFile('./db/db.json',"utf8",(err, notesString)=>
//     {
//       if (err){
//         return res.send("Error w file system")
//       }
//       let notes = JSON.parse(notesString)
//       notes.push(newNote);
//       console.log(notes)
//       fs.writeFile('./db/db.json', JSON.stringify(notes), (err) =>
//       err
//         ? console.error(err)
//         : console.log(
//             `Review for ${newNote.title} has been written to JSON file`
//           )
//     );
//   })
//   const response = {
//     status: 'success',
//     body: newNote,
//   };

//   console.log(response);
//   res.json(response);
// } else {
//   res.json('Error in posting note');
// }
// });

// //delete note
// // app.delete();