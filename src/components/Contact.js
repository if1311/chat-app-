import React from "react";
import "./Contact.css";

// function Contact(props) {
//     return (
//         <header className= 'Contact'>
//             <img className= 'avatar' src= {props.avatar} alt= 'avartar of a woman' />
//             <div>
//                 <h4 className= 'name'> {props.name} </h4>
//                 <div className= 'status'>
//                     <span className= {props.online? 'status-online':'status-offline'}></span>
//                     {/* <p className= 'status-offline'></p> */}
//                     <p className= 'status-text'> {props.online? 'Online': 'Offline'} </p>
//                 </div>
//             </div>

//         </header>
//     );
// }

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
    };
  }
  render() {
    return (
      <header className="Contact">
        <img
          className="avatar"
          src={this.props.avatar}
          alt="avartar of a woman"
        />
        <div>
          <h4 className="name"> {this.props.name} </h4>
          <div className="status">
            <span
              onClick={event => {
                this.setState({ online: true });
              }}
              className={this.state.online ? "status-online" : "status-offline"}
            ></span>
            {/* <p className= 'status-offline'></p> */}
            <p className="status-text">
              {" "}
              {this.state.online ? "Online" : "Offline"}{" "}
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Contact;
