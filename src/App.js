import './App.css';
import Button from './components/Button';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <div>
        <Button name="Add" />
      </div>
      <Task name="Task 1" style={{ textDecorationLine: 'line-through' }} />
      <div>
        <Task name="Task 2" />
      </div>
    </div>
  );
}

export default App;
