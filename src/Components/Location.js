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
                    <p className="LocationName">Oklahoma</p>
                    <p className = "Address">9373 S 4250 Rd, Inola, OK 74036</p>
                    <p className = "Number">(918) 543-3488</p>
                </div>

                <div className ="locationdesc">
                <p className="LocationName">Kansas</p>
                <p className = "Address">11491 SE Prairie Rd, Galena, KS 66739</p>
                <p className = "Number">(620) 856-3757</p>
                </div>
                </div>

                <div className="Map">

                </div>
            </div>
                
            </div>

     
        )
    }
}


export {Location};