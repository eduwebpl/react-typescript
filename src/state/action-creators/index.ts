import { Action } from '../reducers/counterReducer';
import { Dispatch } from 'react';

export const add = (value: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'add',
            payload: value,
        });
    };
};

export const subtract = (value: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'subtract',
            payload: value,
        });
    };
};

export const reset = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'reset',
        });
    };
};
