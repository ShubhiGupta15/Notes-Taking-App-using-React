import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
const Notes =(props)=> {
const deleteNote =()=>{
    props.Delete(props.id);
  };
 return (
        <div className="note">
          <h1>{props.title}</h1>
          <br />
          <p>{props.content}</p>
          <button class="button">
          <EditOutlinedIcon class="edit" />
          </button>
          <button class="button1" onClick={deleteNote}>
          <DeleteOutlineIcon  class="delete" />
          </button>
          </div>
  );
};

export default Notes;