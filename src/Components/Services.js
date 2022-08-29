import React,{Component, useEffect} from 'react';
import { render } from '@testing-library/react';
import '../Styles/Services.css';
import logo from '../Assets/LOGO.png'
import girls from '../Assets/TwoGirls.png'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component{
    render(){
       
        return(
            
            <div className = "MainServices" id ='services'>
            
            
                <div className = "Servicerow">
                   <img id = "girls" src = {girls}></img>
                </div>
           
                
                <div className = "Servicerow" id = "priceDetails">
                    <p className = "serviceTitle">services</p>
                    <div className = "Prices">
                        <div className = "serviceBox">
                            <p class = "serviceSubTitle">Private booth dances</p>
                            <p class = "serviceDescription">1 Song........................................$25</p>
                            <p class = "serviceDescription">2 Songs......................................$45</p>
                        </div>
                        <div className = "serviceBox">
                            <p class = "serviceSubTitle">Private VIP Room</p>
                            <p class = "serviceDescription">3 Songs.....................................$100</p>
                            <p class = "serviceDescription">1/2 Hour....................................$220</p>
                            <p class = "serviceDescription">1 Hour.......................................$400</p>
                        </div>
                        <div className = "serviceBox">
                            <p class = "serviceSubTitle">Couples</p>
                            <p class = "serviceDescription">1 Song......................................$35</p>
                            <p class = "serviceDescription">2 Songs.....................................$65</p>
                        </div>
                        <div className = "serviceBox">
                            <p class = "serviceSubTitle">Couples VIP Room</p>
                            <p class = "serviceDescription">3 Songs.....................................$130</p>
                            <p class = "serviceDescription">1/2 Hour....................................$300</p>
                            <p class = "serviceDescription">1 Hour.......................................$500</p>
                        </div>
                    </div>
                </div>

            
            
            </div>

     
        )
    }

   
    
}


export {Services};