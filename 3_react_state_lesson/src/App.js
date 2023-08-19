import React from 'react';
import './App.css';
import NewComp from './Components/NewComp';

class App extends React.Component {
  styles = {
    fontStyle: 'italic',
    color: 'teal',
  };
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div className='App'>
        <h1 style={this.styles}>Hello, {this.state.name}!</h1>
        <NewComp />
      </div>
    );
  }
}

export default App;
