import React from 'react';
import './App.css';
import FunctionComp from './Components/FunctionComp';
import { ClassComp, ClassComp1 } from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';
function App() {
  return (
    <div className='App'>
      <h1> Hello World </h1>;<h1>This Lesson about component</h1>;
      <FunctionComp />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp />
    </div>
  );
}

export default App;
