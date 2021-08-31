interface IAddAction {
    type: 'add';
    payload: number;
}

interface ISubtractAction {
    type: 'subtract';
    payload: number;
}

interface IResetAction {
    type: 'reset';
}

export type Action = IAddAction | ISubtractAction | IResetAction