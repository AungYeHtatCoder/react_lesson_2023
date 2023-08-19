import React, { Component } from 'react';

export class ClassProp extends Component {
  render() {
    return (
      <div>
        <h6>
          Hello {this.props.name} learners! Welcome to AMK-TECHNO ONLINE CLASS{' '}
          <span>from {this.props.place}</span>
        </h6>
        <h4>
          {this.props.children ? this.props.children : 'No Child Component'}
        </h4>
      </div>
    );
  }
}

export default ClassProp;
