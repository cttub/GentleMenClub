import React,{Component} from 'react';
import { render } from '@testing-library/react';
import '../Styles/Home.css';
import logo from '../Assets/LOGO.png'
import hire from '../Assets/hire.png'

import video from '../Assets/video.mp4';

class Home extends Component{
    render(){
        
        return(
            
            <div className = "MainHome" id = 'home'>
            
            <p className = "Title">Sensations Gentleman's Club</p>
            <p className = "SubTitle">fully nude • 18 and up •  pay at door</p>
            
            <div className = "row">

            <a href = '#location'><p className = "item">visit us</p></a>
            <a href = '#form'><img id = "midLogo" src = {hire}></img></a>
                <a href = '#services'><p className = "item">services</p></a>
            
            </div>
            
           
            <video id = "video" autoPlay controls loop>
            <source src = {video} type = "video/mp4"></source>
            </video>
            
            
            </div>

     
        )
    }
}


export {Home};
