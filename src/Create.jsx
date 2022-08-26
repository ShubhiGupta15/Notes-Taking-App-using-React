import React from "react";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useState } from "react";


const Create =(props)=> {
  const[note,setNote]=useState({
    title: "",
    content: "",
});

const InputEvent=(event) =>{
  //const Value=event.target.Value;
  //const name=event.target.name;
  const{name,value}=event.target;
  setNote((prevdata) =>{
    return{
      ...prevdata,
      [name]:value,
    };
    });
    
  };

  const addEvent=() =>{
    props.passNote(note);
    setNote({
      title: "",
      content: "",
  });

  };
   
    return(
    <>
    <div class="container">
    <form>
        <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title"  />
        <p>
        <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a Note..." />
      </p>
      <Button onClick={addEvent}>
          <AddCircleOutlineIcon class="add" />
      </Button>

    </form>
    </div>

    </>
    );
    };
    export default Create;
    