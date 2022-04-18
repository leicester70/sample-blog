// Import Resources
import logo from './logo.svg';

// Import Styles
import './App.css';
import './codepenCSS/scrollbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import NavigationBar from './components/shared/navigationBar/navigationBar';
import ViewEntry from './components/home/viewEntry/viewEntry'
import TimeLine from './components/home/timeLine/timeLine';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <div className="main-content-container d-flex">
        <div className='col-4'><TimeLine /></div>
        <div className='col-8'>
          <ViewEntry />
          <ViewEntry />
          <ViewEntry />
          <ViewEntry />
        </div>
      </div>
    </div>

  );
}

export default App;