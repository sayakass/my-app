import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <Button name="+" />
      <span>0</span>
      <Button name="-" />
      <Button name="Reset" />
    </div>
  );
}

export default App;
