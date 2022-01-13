import React from 'react';
import './App.css'
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <hr/>
      <TodosContainer/>
    </div>
  );
}

export default App;