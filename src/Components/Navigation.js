import React,{Component} from 'react';
import { render } from '@testing-library/react';
import '../Styles/Navigation.css';
import logo from '../Assets/LOGO.png'

class Navigation extends Component{
    render(){
        return(
            
            <div className = "Main">
                 <img id ='logopic' src = {logo}></img> 
                 <div className = "buttonRow">
                 <div className='button'></div> 
                 <a href = "#home"><p className='button'>home</p></a>
                 <a href = '#services'><p className='button'>services</p></a>
                 <p className='button'>policy</p>
                 <p className='button'>visit us</p>
                 </div>
    
            </div>

     
        )
    }
}

export {Navigation};