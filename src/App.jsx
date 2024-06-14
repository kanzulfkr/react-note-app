import React, { useState } from 'react';
import Home from './screens/home';
import AddNote from './screens/addNote';
import EditNote from './screens/editNote';

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, deleteNote, editNote, selectedNote }) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} />;
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return selectedNote ? <EditNote note={selectedNote} setCurrentPage={setCurrentPage} editNote={editNote} deleteNote={deleteNote} /> : null;
    default:
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedNote, setSelectedNote] = useState(null);

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter((note) => note.id !== id));
    setCurrentPage('home');
    setSelectedNote(null);
  };

  const editNote = (id, title, desc) => {
    setNoteList(
      noteList.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            title: title,
            desc: desc,
          };
        }
        return note;
      })
    );
    setCurrentPage('home');
    setSelectedNote(null);
  };

  return <CurrentPageWidget currentPage={currentPage} noteList={noteList} setCurrentPage={setCurrentPage} addNote={addNote} deleteNote={deleteNote} editNote={editNote} selectedNote={selectedNote} />;
};

export default App;
