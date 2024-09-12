import React from 'react';
import Chatbot from './containers/Chatbot';
import Navbar from './containers/Navbar';
import './App.css'


function App() {
  return (
    <div className>
      <div id='logo'>Gearbot</div>
      <div><Chatbot /></div>
    </div>
  );

}

export default App;