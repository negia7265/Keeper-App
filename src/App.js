import React ,{useState} from 'react';
import './App.css';
import Header from  './components/Header';
// import Footer from './components/Footer';
import Note from './components/Note';
import Createtextarea from './components/Createtextarea';
function App() {
  const[notes,setNotes]=useState([]);
  function addNote(newnote){
  setNotes(prevNotes=>{
  return [...prevNotes, newnote];
  }); 
  }
  function deleteNote(id){
    console.log(id);
  setNotes(prevNotes=>{
    return prevNotes.filter((noteItem,index)=>{
      return index!==id;
    });
  });
  }
  return (
    <>
    <Header />
    <div style={{display:"flex",
  justifyContent:"center"}}>
    <Createtextarea addNote={addNote}/>
    </div>
     {notes.map((noteitem,index)=>{
      return <Note title={noteitem.title} content={noteitem.content} onDelete={deleteNote} key={index} id={index}/>
    })}
    </>
  )
}

export default App;
