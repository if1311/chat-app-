import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import  Contact from './components/Contact';
import './components/ContactList';
import users from './components/ContactList';



const App = () => (
  <div>
    {users.map(item => (
  <Contact name={item.name} avatar={item.avatar} online={item.online} />))}
  </div>
);



Contact.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  online: PropTypes.bool

};

export default App;
