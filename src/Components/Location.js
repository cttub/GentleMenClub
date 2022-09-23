import React,{Component} from 'react';
import { render } from '@testing-library/react';
import '../Styles/Location.css';



class Location extends Component{
    render(){
        
        return(
            
            <div className = "MainLocation" id = 'location'>
            <p className="locationTitle">visit us</p>
          
           
            <button className = "LocationName" onClick = {inolaMap}>Oklahoma</button>
            <p className="LocationName">choose our location</p>
            <button className = "LocationName" id = "kansas" onClick = {kansasMap}>Kansas</button>
           

                <div className="Map" id = "map">

                    <iframe width="100%" height = "300px" id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=9373%20S%204250%20Rd,%20Inola,%20OK%2074036&t=&z=13&ie=UTF8&iwloc=&output=embed">
                    </iframe>

                </div>

            <p className = "info" id = "hours">Tuesday-Sunday 7pm-3pm</p>
            <p className = "info" id = "number">(918)543-3488</p>
            </div>
                
           

     
        )

        function kansasMap(){
            let div = document.getElementById('map');
            div.innerHTML = `<iframe width="100%" height = "300px" id="gmap_canvas" src="https://maps.google.com/maps?q=11491%20Southeast%20Hwy%20166,%20Galena,%20KS%2066739&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`;
            

            div = document.getElementById('hours');
            div.innerHTML = `Monday-Sunday: 6pm - 3am`;

            div = document.getElementById('number');
            div.innerHTML = `(620)856-3757`;
        }
        function inolaMap(){
            let div = document.getElementById('map');
            div.innerHTML = `<iframe width="100%" height = "300px" id="gmap_canvas" src="https://maps.google.com/maps?q=9373%20S%204250%20Rd,%20Inola,%20OK%2074036&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`;
            

            div = document.getElementById('hours');
            div.innerHTML = `Tuesday-Sunday: 7pm - 3am`;

            div = document.getElementById('number');
            div.innerHTML = `(918)543-3488`;
        }
    }
    //https://maps.google.com/maps?q=11491%20SE%20Prairie%20Rd,%20Galena,%20KS%2066739&t=&z=13&ie=UTF8&iwloc=&output=embed

    


}


export {Location};