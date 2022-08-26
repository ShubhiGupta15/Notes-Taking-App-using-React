import React,{ useEffect,useState } from "react";
import Header from "./Header";
import Create from "./Create";
import Notes from "./Notes";

//to get local storage
const getLocalItmes = () => {
  let list = localStorage.getItem('lists');
  console.log(list);

  if (list) {
      return JSON.parse(localStorage.getItem('lists'));
  } else {
      return [];
  }
}

const App =()=> {
  const[addItem,setAddItem]=useState(getLocalItmes());
  //const[toggleSubmit,setToggle]=useState(true);
  const addNote =(note)=>{
    setAddItem((prevData)=> {
      return [...prevData,note];
    });
    console.log(note); 
  };
  
  //to set local storage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(addItem))}, [addItem]);
 
  const onDelete =(id)=>{
    setAddItem((prev)=>
      prev.filter((current,indx)=>{
        return indx !== id;
        
      })
    );
    alert("Do you want to delete it?");
  };

  const Edit= (id)=>{
    let newEditItem=addItem.find((element)=>{
      return element.id === id
    });
    console.log(newEditItem);

  }
 return( 
  <>
  <Header />
  <Create passNote={addNote} />
  
  {addItem.map((val,index)=> {
    return (
    <Notes 
       key={index}
       id={index}
       title={val.title}
       content={val.content}
       Delete={onDelete}
       edit={Edit}
    />
    );
  })}
  
  </>
  );
};
export default App;
