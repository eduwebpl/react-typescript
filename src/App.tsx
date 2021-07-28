import React from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { State, actionCreators } from './state';
import { useSelector, useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const state = useSelector((state: State) => state.counter);
    const { add, subtract, reset } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="App">
            <div>{state}</div>
            <button onClick={() => add(5)}>Add</button>
            <button onClick={() => subtract(10)}>Subtract</button>
            <button onClick={() => reset()}>Reset</button>
        </div>
    );
}

export default App;
