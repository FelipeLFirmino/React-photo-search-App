import React from 'react';
import Search from './components/searchphoto';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container"></div>
        <h1 className="title" >React Photo SearchApp</h1>
        <Search></Search>
      </header>
    </div>
  );
}

export default App;
