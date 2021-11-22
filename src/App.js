import logo from './logo.svg';
import './App.css';
import React from 'react';
import CounterOne from './components/reducerhook/CounterOne';
import CounterTwo from './components/reducerhook/CounterTwo';



function App() {
  return (
    <div className="App">
     <CounterOne/>
     <CounterTwo/>
    </div>
  );
}

export default App;