import logo from './logo.svg';
import './App.css';
import background from './Assets/background.png';

import {Navigation} from './Components/Navigation';
import {Home} from './Components/Home';
import {Services} from './Components/Services';
import {Location} from './Components/Location';
import {WorkForm} from './Components/WorkForm';


function App() {
  return (
    <div className="App">
        <div className = "Desktop">     
          <Navigation/>
          <Home/>
          <Services/>
          <Location/>
          <WorkForm/>
          </div>     
    </div>
  );
}


export default App;
