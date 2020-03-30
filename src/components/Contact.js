import React from 'react';
import './Contact.css';






function Contact(props) { 
    return (
        <header className= 'Contact'>
            <img className= 'avatar' src= {props.avatar} alt= 'avartar of a woman' />
            <div>
                <h4 className= 'name'> {props.name} </h4>
                <div className= 'status'>
                    <span className= {props.online? 'status-online':'status-offline'}></span>
                    {/* <p className= 'status-offline'></p> */}
                    <p className= 'status-text'> {props.online? 'Online': 'Offline'} </p>
                </div>
            </div>

        </header>
    );
}


export default Contact;




