import React, { ReactElement, useReducer } from 'react';

const initialState = { count: 0 };

interface ICounterState {
    count: number;
}

interface IResetAction {
    type: 'reset';
}

interface ISetAction {
    type: 'set';
    count: number;
}

interface IAddAction {
    type: 'add';
}

interface ISubtractAction {
    type: 'subtract';
}

type CounterAction = IResetAction | ISetAction | IAddAction | ISubtractAction;

function reducer(state: ICounterState, action: CounterAction): ICounterState {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'set':
            return { count: action.count };
        case 'add':
            return { count: state.count + 1 };
        case 'subtract':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function Counter({ count = 0 }: ICounterState) {
    const [state, dispatch] = useReducer(reducer, { count });

    return (
        <>
            <div>Count: {state.count}</div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'add' })}>+</button>
            <button onClick={() => dispatch({ type: 'set', count: 5 })}>Set to 5</button>
            <button onClick={() => dispatch({ type: 'subtract' })}>-</button>
        </>
    );
}

function App(): ReactElement {
    return (
        <div>
            <Counter count={0} />
        </div>
    );
}

export default App;
