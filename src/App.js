import React, {useState} from 'react';
import './App.css';

function App() {
  const [tasks,setTasks] = useState([]);
  const [task, setTask] = useState('');
  
  const addTask = ()=>{
    if (task!==""){
      setTasks([...tasks,task]);
      setTask('');
    }
  };

  const deleteTask = ()=>{
    setTasks([]);
  };

  function remove(ind) {
    setTasks(tasks.filter(p => p !== tasks[ind]));
  };

  const ent = e => {
    if (e.key ===('Enter')){
      addTask();
    }
  }

  return (
      <div className="App">
        <span className= "Tdlist">
          <h1>Todo List</h1>
          <ul>
            {tasks.map((t, index) => (
              <li key={index}>{index+1}. {t}<button className="Xbut" onClick={(e)=>{remove(index)}}>X</button></li>
            ))}
          </ul>
        </span>
        <span className="input">
          <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} onKeyPress={ent}/>
          <button className="tas" onClick={addTask}>Add Task</button>       <button className="tas" onClick={deleteTask}>할 일 전체 삭제</button>
        </span>
      </div>
  );
}

export default App;