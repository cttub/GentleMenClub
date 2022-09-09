import React,{Component} from 'react';
import { render } from '@testing-library/react';
import '../Styles/WorkForm.css';
import RGF from 'react-google-forms'


class WorkForm extends Component{
    render(){
        return(
            
            <div className = "MainForm" id = 'form'>
            
            <div id="ff-compose"></div>
            <script async defer src="https://formfacade.com/include/102368871124872976069/form/1FAIpQLSfo_1qAYam4oXeQxTAyJurj_NtsjAUQOY8VvqteQh30gOOMxg/clean.js?div=ff-compose"></script>
            </div>
            

        )
    }

    componentDidMount(){
        var script = document.createElement("script");
        script.id = "ff-script";
        script.src = "https://formfacade.com/include/102368871124872976069/form/1FAIpQLSfo_1qAYam4oXeQxTAyJurj_NtsjAUQOY8VvqteQh30gOOMxg/classic.js?div=ff-compose";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
    }
        

    
}


export {WorkForm};