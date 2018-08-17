import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        
         <Navbar/>
         <main className="container">
        </main>
      </div>
       
    );
  }
}

export default App;
