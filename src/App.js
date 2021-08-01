import './App.css';
import Select from './component/Select';

function App() {
  return (
    <div className="App">
      <Select htmlFor="Province" label="Province" value1="Bangkok" value2="Nonthaburi" />
      <Select htmlFor="District" label="District" value1="Pak kret" value2="Mueang Nonthaburi" />
    </div>
  );
}

export default App;
