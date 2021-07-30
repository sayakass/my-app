import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        <label htmlFor="province">
          Province: &nbsp;
          <select id="province">
            <option value="">- Select Province -</option>
            <option value="Bangkok">Bangkok</option>
            <option value="Nonthaburi">Nonthaburi</option>
          </select>
        </label>
      </p>
      <p>
        <label htmlFor="district">
          District: &nbsp;
          <select id="district">
            <option value="">- Select District -</option>
            <option value="Bangkok">Pak kret</option>
            <option value="Nonthaburi">Mueang Nonthaburi</option>
          </select>
        </label>
      </p>
    </div>
  );
}

export default App;
