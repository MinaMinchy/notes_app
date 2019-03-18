'use strict';

  function testReturnAllTheNotes() {
     var noteList = new NoteList
     noteList.list = ['My favourite language is Italian.', 'My favourite food is the sushi.' ]
     assert.isTrue(noteList.listAll() === ('My favourite language is Italian.', 'My favourite language is Italian.'))
     console.log("testReturnAllTheNotes is passing");
 };
 testReturnAllTheNotes()

  function testCreatesAndStoresANewSingleNote() {
     var noteList = new NoteList
     noteList.createNote('Favourite place: park.')
     assert.isTrue( noteList.list[0] === ('Favourite place: park.'))
     console.log("testCreatesAndStoresANewSingleNote is passing");
 };
 testCreatesAndStoresANewSingleNote()
