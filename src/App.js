import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content" id='app-main-content'>
        <h1>Sample-Blog</h1>
      </div>

    </div>

  );
}

export default App;
