import './App.css';

function App() {
  const fakeTasks = ['Eat Dinner', 'Do Laundry', 'Go to the gym', ]
    return (
      <>
        <h2>TODO LIST APP</h2>
        <input type='text' style={{ outline: 'none'}}/>
        <button> Add Task </button>
        {fakeTasks.map(task =>(
          <h2>{task}</h2>
        ))}
      </>
    )
}

export default App;
