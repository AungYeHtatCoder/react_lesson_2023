import React, { Component } from 'react';
import BellA from './bell.jpg';
import BellB from './img/bell_b.png';
class NewComp extends Component {
  styles = {
    fontStyle: 'bold',
    color: 'purple',
  };
  btn = {
    fontStyle: 'bold',
    color: 'teal',
    border: '2px solid red',
    borderRadius: '5px',
    padding: '5px',
    margin: '5px',
  };
  ButtonChange = () => {
    this.setState({
      message: 'Thank you for subscribing',
      sub: 'Subscribed',
    });
  };
  ImageChange = () => {
    this.setState({
      imageUrl: BellB,
      message: 'You have a new notification',
    });
  };
  constructor(props) {
    super(props);

    this.state = {
      message: 'Subscribe to my AMK-TECHNO YOUTUBE channel',
      sub: 'Subscribe',
      imageUrl: BellA,
    };
  }
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button style={this.btn} onClick={this.ButtonChange}>
          {this.state.sub}
        </button>
        <img
          style={{ width: '100px', height: '100px' }}
          src={this.state.imageUrl}
          onClick={this.ImageChange}
          alt=''
        />
      </div>
    );
  }
}

export default NewComp;
