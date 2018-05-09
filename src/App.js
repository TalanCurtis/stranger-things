import React, { Component } from 'react';
import './styles/main.css';
import routes from './routes';
import Nav from './components/Nav/Nav.js';
import SVG_StrangerThingsLogo from './images/svgs/SVG_StrangerThingsLogo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SVG_StrangerThingsLogo height='150' stroke='red' strokeWidth='2'fill='transparent'/>
        <Nav/>
        {routes}
      </div>
    );
  }
}

export default App;
