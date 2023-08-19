import React, { Component } from 'react';

function FunctionProp(props) {
  return (
    <div>
      <h4>this is a function component</h4>
      <h3>
        Hello Learner {props.name}! Welcome to AMK-TECHNO ONLINE CLASS from
        {props.place}
      </h3>
    </div>
  );
}
export default FunctionProp;
