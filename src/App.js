import logo from './logo.svg';
import './App.css';
import background from './Assets/background.png';

import {Navigation} from './Components/Navigation';
import {Home} from './Components/Home';
import {Services} from './Components/Services';


function App() {
  return (
    <div className="App">
        <div className = "Desktop">     
          <Navigation/>
          <Home/>
          <Services/>
          </div>     
    </div>
  );
}


export default App;
