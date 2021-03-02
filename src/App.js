import React from 'react';
// When rendering a component, you first need to import it from 
// it's file path
import ClassComponent from './Components/ClassComponent';
// import FuncComponent from './Components/FuncComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Render components in your JSX as void tags */}
      <ClassComponent />
      {/* <FuncComponent /> */}
    </div>
  );
}

export default App;
