import React,{Component} from 'react';
import { render } from '@testing-library/react';
import '../Styles/LocationMobile.css';



class LocationMobile extends Component{
    render(){
        
        return(
            
            <div className = "MainLocationMobile" id = 'locationMobile'>
          

           
                
     
                <div className="MapMobile" id = "GoogleMaps">

                
                    <p id = "hoursMobile" className = "infoMobile">Mon-Sat: 7pm - 3am</p>
                    <p id = "numberMobile" className = "infoMobile">(918)543-3488</p>
                    
                <div id = "mobilemap">
                    <iframe width="100%" height = "300px" id="mobilemap" 
                    src="https://maps.google.com/maps?q=9373%20S%204250%20Rd,%20Inola,%20OK%2074036&t=&z=13&ie=UTF8&iwloc=&output=embed">
                    </iframe>
                </div>
                    <button className = "LocationNameMobile" onClick = {inolaMapMobile}>Oklahoma</button>
                    <button className = "LocationNameMobile" id = "kansasMobile" onClick = {kansasMapMobile}>Kansas</button>


            </div>
                
            </div>

     
        )

     
     function kansasMapMobile(){
        let div = document.getElementById('mobilemap');
        div.innerHTML = `<iframe width="100%" height = "300px" id="gmap_canvas" src="https://maps.google.com/maps?q=11491%20Southeast%20Hwy%20166,%20Galena,%20KS%2066739&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`;
        

        div = document.getElementById('hoursMobile');
        div.innerHTML = `Mon-Sun: 6pm - 3am`;

        div = document.getElementById('numberMobile');
        div.innerHTML = `(620)856-3757`;
    }
    function inolaMapMobile(){
        let div = document.getElementById('mobilemap');
        div.innerHTML = `<iframe width="100%" height = "300px" id="gmap_canvas" src="https://maps.google.com/maps?q=9373%20S%204250%20Rd,%20Inola,%20OK%2074036&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`;
        

        div = document.getElementById('hoursMobile');
        div.innerHTML = `Mon-Sat: 7pm - 3am`;

        div = document.getElementById('numberMobile');
        div.innerHTML = `(918)543-3488`;
    }
    }

   
    
    


}


export {LocationMobile};