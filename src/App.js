import './App.css';
import { useState } from 'react'

function App() {
  const fakeTasks = ['Eat Dinner', 'Do Laundry', 'Go to the gym', ]

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('') //setTask is the function that allows you to set the variable 

  const addTaskHandler = () => {
    console.log('clicked add task button')
    console.log(task)
    setTasks([task, ...tasks]) // "..."  means to append? "..." = make a new array and put the new task inside of it. the three dots removes the previous array brakets so that you can add the new task
    

    console.log(tasks)
  }

    return (
      <>
        <h2>TODO LIST APP</h2>
        <input 
          type='text' 
          style={{ outline: 'none'}} 
          value={task} 
          onChange={e => setTask(e.target.value)}
        />
        <button onClick = {addTaskHandler}> Add Task </button>
        {tasks.map(task =>(
          <p>•{task}</p>
        ))}
      </>
    )
}

export default App;
