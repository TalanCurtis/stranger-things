import React, { Component } from 'react';
import './styles/main.css';
import routes from './routes';
import Nav from './components/Nav/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        {routes}
      </div>
    );
  }
}

export default App;
