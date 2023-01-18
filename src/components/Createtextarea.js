import React ,{useState} from 'react';

export default function Createtextarea(props) {
  const [note,setNote]=useState({
    title:"",
    content:""
  });
  function handleChange(event){
    const {name,value}=event.target;
    
    setNote(prevNote=>{ 
      return {
        ...prevNote,
        [name]:value
      };
    });
  }
  function submitnote(event){
  event.preventDefault();
  props.addNote(note);
  document.querySelector(".form-control").value="";
  document.querySelector(".title").value="";
  }
  return (
    <>
  <form>
   
      <div  className="textarea1">
          <input className="title" onChange={handleChange} name="title" placeholder="Title" />
            <div className="form-floating">
                <textarea className="form-control" name="content" onChange={handleChange} rows="15"  placeholder="Input Content" id="floatingTextarea2" htmlstyle="height: 100px"></textarea>
            </div> 
            <button  onClick={submitnote} className="addbutton"  >Add</button>
      </div>
      
   
 </form>
 </>
  )
}
