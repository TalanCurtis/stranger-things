import React, { Component } from 'react';
import './styles/main.css';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Everything Reverted */}
        {routes}
      </div>
    );
  }
}

export default App;
