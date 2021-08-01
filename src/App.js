import './App.css';
import Name from './component/Name';

function App(props) {
  return (
    <div>
      <h1>Hello My Friend</h1>
      <ul>
        Friend List
        <Name name="John" />
        <Name name="Jack" />
        <Name name="Jane" />
      </ul>
    </div>
  );
}

export default App;
