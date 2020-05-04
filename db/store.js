const util = require('util')
const fs = require('fs')

const uuidv1 = require('uuid/v1')

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
  read() {
    return readFileAsync("./db.json", "utf8")
  }

  write(note) {
    return writeFileAsync("./db.json", JSON.stringify(note))
  }

  getNotes() {
    this.read().then(notes => {
      var obj = JSON.parse(notes)

      return list
    })
  }

  addNote(note) {
    var newNote = {
      text: note.text,
      title: note.title,
    }
    this.getNotes().then(notes => {
      notes.push(newNote);
    });

    return writeFileAsync("./db/db.json", JSON.stringify(saved))
  }


  removeNote(id) {
    // get all notes
    // remove the note with the given id
    // and return a list of notes that does NOT have that id (in essence the filtered list)
  }

}

module.exports = new Store()