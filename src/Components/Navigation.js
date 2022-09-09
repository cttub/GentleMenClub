import React,{Component} from 'react';
import { render } from '@testing-library/react';
import '../Styles/Navigation.css';
import logo from '../Assets/LOGO.png';


class Navigation extends Component{
    render(){
        return(
            
            <div className = "Main">
                 <img id ='logopic' src = {logo}></img> 

                 <div id = "buttonRow">

                 <div id='button'></div> 
                 <a href = "#home"><p className='button'>home</p></a>
                 <a href = '#services'><p className='button'>services</p></a>
                 <a href = '#location'><p className='button'>visit us</p></a>
                 <a href = '#form'><p className='button'>work with us</p></a>
                 
                 </div>
    
               

            </div>

     
        )
    }
}

export {Navigation};