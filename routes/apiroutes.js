const router = require("express").Router();
const data = require("../db/db.json");
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');


// This route  will serve up the `api/notes.html` page
router.get('/', (req, res) => res.json(data));

// //POST SECTION
router.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);

    const { title, text, noteId } = req.body;
    if (title && text && noteId) {
        const newNote = {
            title,
            text,
            noteId: uuidv4()
        };
        const noteString = JSON.stringify(newNote);
        fs.readFile('../db/db.json', "utf8", (err, notesString) => {
            if (err) {
                console.log("We got an error in the readfile", err)
            }
            console.log("notes string" + notesString)
            let notes = JSON.parse(notesString)
            //pushing new notes to the array in db.json
            notes.push(newNote);
            console.log(notes)
            fs.writeFile('../db/db.json', JSON.stringify(notes), (err) =>
                err ? console.error(err) : console.log(`${newNote.title} has been written to JSON file`));
        })
        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});

//   //delete note
// router.delete('/:note_id)', (res, req) => {
    // const deleteNote= req.params.id
// });

module.exports = router;