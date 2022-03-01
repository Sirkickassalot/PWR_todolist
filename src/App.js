import './App.css';
import { useState } from 'react'

function App() {
  const fakeTasks = ['Eat Dinner', 'Do Laundry', 'Go to the gym', ]

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')

  const addTaskHandler = () => {
    console.log('clicked add task button')
    console.log(task)
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
          <h2>{task}</h2>
        ))}
      </>
    )
}

export default App;
