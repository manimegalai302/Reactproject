import React, { useState } from 'react';


function AddTask() {
  const [text, setText] = useState('');
  const [des, setDes] = useState('');
  const [tasks, setTasks] = useState([]);
  
  const handleTit = (event) => {
    setText(event.target.value);
  };

  const handleDes = (ev) => {
    setDes(ev.target.value);
  };
  const handleDelete = (index) => {
    {tasks.splice(index, 1)};
  }


  const handleClick = (e) => {
    e.preventDefault();
    let obj= { title: text, description: des }
//   {tasks.push(obj)};
//   console.log(obj);
    setTasks([obj]);


    setText(''); //reset text
    setDes('');  //reset description
  };
 
  

  return (
    <div className='formcon'>
      <label for="name">Title:</label>
      <input
        type="text"
        placeholder='Enter title'
        value={text}
        onChange={handleTit}
      />
      <label for="description">Description:</label>
      <textarea
        placeholder='Enter description'
        value={des}
        onChange={handleDes}
        rows="5"
        columns="20"
      />
      <button onClick={handleClick}>Add</button>

      {tasks.map((task,index) => (
        <div key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={handleDelete(index)}>Delete</button>
    
          
        </div>
      ))}
      
    </div>
    
  );
}

export default AddTask;