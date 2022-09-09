import logo from './logo.svg';
import './App.css';
import background from './Assets/background.png';

import {Navigation} from './Components/Navigation';
import {Home} from './Components/Home';
import {Services} from './Components/Services';
import {Location} from './Components/Location';
import {WorkForm} from './Components/WorkForm';
import {BottomNav} from './Components/BottomNav';


function App() {
  return (
    <div className="App">

        
            <Navigation/>
            <Home/>
          <div id = "Desktop">     
            <Services/>
            <Location/>
           
          </div>  
          <WorkForm/>  
          <BottomNav/>

    </div>
  );
}


export default App;
