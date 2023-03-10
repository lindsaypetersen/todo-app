import React, {useState } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Lindsay's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
