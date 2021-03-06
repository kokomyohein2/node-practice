console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = process.argv[2];
console.log('Command : ', command);
console.log('Process : ', process.argv);
console.log('Yargs : ', argv);

if (command === 'add') {
  console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    console.log('---');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  console.log('Listing all notes');
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note Found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
