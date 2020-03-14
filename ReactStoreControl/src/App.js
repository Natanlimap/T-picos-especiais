import React from 'react';
import './App.css';
import Store from './store';
import NavigationBar from './NavigationBar';

function App() { //main component that calls my store component
  return (
    <div className="App">
      <header className="App-header">
         <Store></Store>
      </header>
    </div>
  );
}
export default App;