import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch= useDispatch();
  const state = useSelector((state) => state);

  return (
    <div className="App">
      <h1>Counter: {state.count}</h1>
      <div>
        <button onClick={() => dispatch({type:"add"})}>+</button>
        <button  onClick={() => dispatch({type:"substract"})}>-</button>
        <button onClick={() => dispatch({type:"multby3"})}>3X</button>
        <button onClick={() => dispatch({type:"divideby3"})}>/3</button>
        <button onClick={() => dispatch({type:"add100"})}>+100</button>
      </div>
    </div>
  );
}

export default App;
