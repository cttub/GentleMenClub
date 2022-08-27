import React,{Component} from 'react';
import { render } from '@testing-library/react';
import '../Styles/WorkForm.css';



class WorkForm extends Component{
    render(){
        return(
            
            <div className = "MainForm" id = 'form'>
            
            
            <form className="Forms">
            
            <div className= "LabelForms">
                <p id = "workForUs">work for us</p>
                    <label id = "Labels">
                        name:
                        <input type="text" name="name" id = "insideText" placeholder="John Doe" required/>
                    </label>
                    <label id = "Labels">
                        number:
                        <input type="tel" id="phone" name="phone" placeholder="620-856-3757" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
                    </label>
                    <br></br>

                    <div className = "secondRowLabels">
                        <label id = "Labels">
                            email:
                            <input type="email" name="email" id = "insideText" placeholder="johndoe@gmail.com" required/>
                        </label>
                        <label id = "Labels">
                            birthdate:
                            <input type="date" id="insideText" name="birth" min="1950-01-01" max="2004-12-31" required></input>
                        </label>
                    </div>
            </div>

            <p className="Positions">What are you applying for?</p>
                <label id = "Labels" className = "CheckBox">
                    waitress
                    <input type="checkbox" name="waitress"  />
                </label>
                <label id = "Labels" className = "CheckBox">
                    dancer
                    <input type="checkbox" name="dancer" />
                </label>
                <label id = "Labels" className = "CheckBox">
                    dj
                    <input type="checkbox" name="DJ" />
                </label>
                <label id = "Labels" className = "CheckBox">
                    bouncer
                    <input type="checkbox" name="bouncer" />
                </label>

                <br></br><br></br>
                <p className="Positions">Brief description of yourself and experience</p>
                <label id = "Labels" className = "Labels">
                <textarea input type = "text" name="paragraph_text" cols="50" rows="10" id = "experience"></textarea>
                    
                </label>
                
                
                <br></br><br></br>
                <input type="submit" value="Submit" id = "ButtonSubmit" />
                </form>  
                
                
            </div>
            

     
        )
    }
}


export {WorkForm};