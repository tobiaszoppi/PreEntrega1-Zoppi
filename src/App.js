import './App.css';
import React from 'react';
import NavComponent from './components/ClassComponent/NavComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavComponent></NavComponent>
        <ItemListContainer saludo="Buenas! :)"></ItemListContainer>

    </div>
  );
}

export default App;
