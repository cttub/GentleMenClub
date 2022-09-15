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
                            <p className = "serviceSubTitle">Private&nbsp;booth&nbsp;dances</p>
                            <p className = "serviceDescription">1&nbsp;Song........................................&nbsp;$25</p>
                            <p className = "serviceDescription">2&nbsp;Songs......................................&nbsp;$45</p>
                        </div>
                        <div className = "serviceBox">
                            <p className = "serviceSubTitle">Private VIP Room</p>
                            <p className = "serviceDescription">3&nbsp;Songs.....................................&nbsp;$100</p>
                            <p className = "serviceDescription">1/2&nbsp;Hour....................................&nbsp;$220</p>
                            <p className = "serviceDescription">1&nbsp;Hour.......................................&nbsp;$400</p>
                        </div>
                        <div className = "serviceBox">
                            <p className = "serviceSubTitle">Couples</p>
                            <p className = "serviceDescription">1&nbsp;Song......................................&nbsp;$35</p>
                            <p className = "serviceDescription">2&nbsp;Songs.....................................&nbsp;$65</p>
                        </div>
                        <div className = "serviceBox">
                            <p className = "serviceSubTitle">Couples&nbsp;VIP&nbsp;Room</p>
                            <p className = "serviceDescription">3&nbsp;Songs.....................................&nbsp;$130</p>
                            <p className = "serviceDescription">1/2&nbsp;Hour....................................&nbsp;$300</p>
                            <p className = "serviceDescription">1&nbsp;Hour.......................................&nbsp;$500</p>
                        </div>
                    </div>
                </div>

            
            
            </div>

     
        )
    }

   
    
}


export {Services};