import {Action} from "../actions";

const initialState = 0;

const counterReducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case "add":
            return state + action.payload;
        case "subtract":
            return state - action.payload;
        case "reset":
            return 0; // + action.payload
        default:
            return state;
    }
}

export default counterReducer;