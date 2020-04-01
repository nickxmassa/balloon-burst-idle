import React from 'react';
// import logo from './logo.svg';
import Balloon from './components/Balloon';
import './App.css';

function App() {
  return (
    <div className="App">
    <Balloon 
    color="#ff0000"
    minSize={10}
    pumpRate={10}
    />
    <Balloon 
    color="#ff9900"
    minSize={15}
    pumpRate={5}
    />
    <Balloon 
    color="#ffff00"
    minSize={20}
    pumpRate={2.5}
    />
    <Balloon 
    color="#33cc33"
    minSize={25}
    pumpRate={1}
    />
    <Balloon 
    color="#0000ff"
    minSize={30}
    pumpRate={1}
    />
    <Balloon 
    color="#660066"
    minSize={35}
    pumpRate={1}
    />
    </div>
    );
  }

  export default App;
