import './App.css';

function App() {
  return (
    <div className="App">
      <button>Add</button>
      <div>
        <span style={{ textDecoration: 'line-through' }}>Task1</span>
        <button>Edit</button>
        <button>Del</button>
      </div>
      <div>
        <span style={{ textDecoration: 'line-through' }}>Task2</span>
        <button>Edit</button>
        <button>Del</button>
      </div>
    </div>
  );
}

export default App;
