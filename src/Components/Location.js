import React,{Component} from 'react';
import { render } from '@testing-library/react';
import '../Styles/Location.css';



class Location extends Component{
    render(){
        
        return(
            
            <div className = "MainLocation" id = 'location'>
            <p className="locationTitle">visit us</p>

            <div className="locationBody">
                <div className="LocationDescription">
                <div className ="locationdesc">
                    <button className="LocationName" onClick = {inolaMap}>Oklahoma</button>
                    <p className = "Address">9373 S 4250 Rd, Inola, OK 74036</p>
                    <p className = "Number">(918) 543-3488</p>
                </div>

                <div className ="locationdesc">
                <button className="LocationName" onClick={kansasMap}>Kansas</button>
                <p className = "Address">11491 SE Prairie Rd, Galena, KS 66739</p>
                <p className = "Number">(620) 856-3757</p>
                </div>
                </div>

                <div className="Map" id = "GoogleMaps">

                    <iframe width="600" height="500" id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=9373%20S%204250%20Rd,%20Inola,%20OK%2074036&t=&z=13&ie=UTF8&iwloc=&output=embed">
                    </iframe>

                </div>
            </div>
                
            </div>

     
        )

        function kansasMap(){
            const div = document.getElementById('GoogleMaps');
            div.innerHTML = `<iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=11491%20SE%20Prairie%20Rd,%20Galena,%20KS%2066739&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`;
            
        }
        function inolaMap(){
            const div = document.getElementById('GoogleMaps');
            div.innerHTML = `<iframe width="100%" height="100%" id="gmap_canvas" 
            src="https://maps.google.com/maps?q=9373%20S%204250%20Rd,%20Inola,%20OK%2074036&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`;
            
        }
    }
    //https://maps.google.com/maps?q=11491%20SE%20Prairie%20Rd,%20Galena,%20KS%2066739&t=&z=13&ie=UTF8&iwloc=&output=embed

    


}


export {Location};