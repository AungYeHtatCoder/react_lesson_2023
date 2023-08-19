import logo from './logo.svg';
import './App.css';
import ClassProp from './ClassProp';
import FunctionProp from './FunctionProp';
function App() {
  return (
    <div className='App'>
      <ClassProp name='Learner 1' place='Mandalay'>
        <p>Hi, I am a child of ClassProp component</p>
      </ClassProp>
      <ClassProp name='Learner 2' place='Yangon'>
        <button>Click Me</button>
      </ClassProp>
      <ClassProp name='Learner 3' place='NayPyiTaw' />
      <ClassProp name='Learner 4' place='PyinOoLwin' />
      <ClassProp name='Learner 5' place='Mawlamyine' />
    </div>
  );
}

export default App;
