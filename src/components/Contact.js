import React from 'react';
import './Contact.css';



const contactOnline = true;


function Contact() { 
    return (
        <header className= 'Contact'>
            <img className= 'avatar' src= 'https://randomuser.me/api/portraits/women/31.jpg' alt= 'avartar of a woman' />
            <div>
                <h4 className= 'name'> Minnie Porter </h4>
                <div className= 'status'>
                    <span className= {contactOnline? 'status-online':'status-offline'}></span>
                    {/* <p className= 'status-offline'></p> */}
                    <p className= 'status-text'> {contactOnline? 'Online': 'Offline'} </p>
                </div>
            </div>

        </header>
    );
}


export default Contact;




