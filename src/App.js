import './App.css';
import Hello from './component/Hello';
import Header from './component/Header';
import Footer from './component/Footer';
import Menu from './component/Menu';

function App() {
  return (
    <div>
      <Header />
      <Hello name="John" />
      <Hello name="Jack" />
      <Hello name="Jane" />
      <Footer />
    </div>
  );
}

export default App;
