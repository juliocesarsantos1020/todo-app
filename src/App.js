import React, { Component } from 'react';
import Routes from './components/routes'
import Menu from './components/templates/menu'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './css/custom.css'

class App extends Component {
  render() {
    return (
      <div className="container">
          <Menu/>
          <Routes />
      </div>
    );
  }
}

export default App;