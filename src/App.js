// Import Resources
import logo from './logo.svg';

// Import Styles
import './App.css';
import './codepenCSS/scrollbar.css'

// Import Components
import NavigationBar from './components/shared/navigationBar/navigationBar';
import ViewEntry from './components/home/viewEntry/viewEntry'

function App() {

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <div className="main-content-container">
        <ViewEntry></ViewEntry>
      </div>
    </div>

  );
}

export default App;