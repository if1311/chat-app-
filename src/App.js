import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import  Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name='Minnie Porter' avatar='https://randomuser.me/api/portraits/women/31.jpg' online />
      <Contact name='Harry Herrera' avatar='https://randomuser.me/api/portraits/men/55.jpg' offline />
      <Contact name='Same Carr' avatar='https://randomuser.me/api/portraits/men/94.jpg' online />
    </div>
  );
}



Contact.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  online: PropTypes.bool

};

export default App;
