import React from 'react';
import ColoredLine from './line';





function Name(props){
    return <span> {props.FirstName}, {props.LastName} </span>
}

const ContactList  = ()=>{
    return(
        
        
        <div className="contact">     
        <p><i className="fa fa-user-circle fa-1x float-left">
        </i> <Name FirstName= "Olayinka" Name LastName="Bolaji"/> <i className="fa fa-bars fa-1x float-right"></i>
        </p>
        <ColoredLine color="white" />

        
        
        <p><i className="fa fa-user-circle fa-1x float-left">
        </i> <Name FirstName= "Olasanjo" Name LastName="John"/> <i className="fa fa-bars fa-1x float-right"></i>
        </p>
        <ColoredLine color="white" />
        <p><i className="fa fa-user-circle fa-1x float-left">
        </i> <Name FirstName= " Abbey" Name LastName="John"/> <i className="fa fa-bars fa-1x float-right"></i>
        </p>
        
        
        
                 
    </div>
       
            
        
    )
}
export default ContactList;