import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';
class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Aung Myo Khaing',
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Aung Myo Khaing',
      });
    }, 2000);
  }
  render() {
    console.log('*********Parent Component Render*********');
    return (
      <div>
        I'm ParentComp
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
