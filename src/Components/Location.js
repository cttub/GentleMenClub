import React,{Component} from 'react';
import { render } from '@testing-library/react';
import '../Styles/Location.css';



class Location extends Component{
    render(){
        return(
            
            <div className = "MainLocation" id = 'location'>
            
          
                <div className = "Map">
         
                </div>
            </div>

     
        )
    }
}


export {Location};