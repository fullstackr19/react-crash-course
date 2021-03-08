import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/actions';

function App() {

  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Crash Course</h1>
      </header>
      <div className="container">
        <h3>Count: {counter}</h3>
        <button id="increment__btn" onClick={() => dispatch(increment())}>+</button>
        <button id="decrement__btn" onClick={() => dispatch(decrement())}>-</button>
        {islogged ? <p>this is a very sensitive info</p> : ''}
      </div>
    </div>
  );
}

export default App;
