import React from 'react';
import './App.css';
import List from './List';


function App() {
  render() {
    return (
      <div className="container">
        <div className="col -md-6 mx -auto">
          <h1 className="text-center">TODO List App</h1>
          <List />
        </div>
      </div>
    )
  }
  
}

export default App;
