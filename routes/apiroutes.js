const router = require("express").Router();
const data = require("../db/db.json");
const path = require("path")
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');


// This route  will serve up the `api/notes.html` page
//need to read the file in the get method to update the page right away after saving
router.get('/', (req, res) => {
    res.json(JSON.parse(fs.readFileSync("./db/db.json", "utf8")))
});

//POST SECTION
router.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);
    
    const { title, text, id } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };
        const noteString = JSON.stringify(newNote);
        fs.readFile('./db/db.json', "utf8", (err, notesString) => {
            if (err) {
                console.log("We got an error in the readfile", err)
            }
            console.log("notes string" + notesString)
            let notes = JSON.parse(notesString)
            //pushing new notes to the array 
            notes.push(newNote);
            console.log(notes)
            fs.writeFile('./db/db.json', JSON.stringify(notes), (err) =>
                err ? console.error(err) : console.log(`${newNote.title} has been written to JSON file`));
            //need to return res.json notes here after writing the file
            res.json(notes)
        })
    }
    else {
        res.json('Error in posting note');
    }
});

//delete note
router.delete('/:id', (req, res) => {
    const deleteNote = req.params.id
    console.log("delete",deleteNote)
    updatedData = []
    for (i = 0; i < data.length; i++) {
        if (data[i].noteId !== deleteNote) {
            updatedData.push(data[i])
            console.log(updatedData)
            fs.writeFile('./db/db.json', JSON.stringify(updatedData), (error, res) => {
                if (error) throw error;
                console.log(updatedData)
            });
            res.json(updatedData);
        }
    }
});
module.exports = router;