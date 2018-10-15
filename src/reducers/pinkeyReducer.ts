import { Reducer } from 'redux';

import { ADDNUMBER, CLEARNUMBER, SUBMITNUMBER, PinKeyAction } from '../actions/pinkeyActions';

export interface PinKeyState {
    readonly value: number;
}

const defaultState: PinKeyState = {
    value: 0
};

export const pinkeyReducer: Reducer<PinKeyState> = (state = defaultState, action: PinKeyAction) => {
    switch (action.type) {
        case ADDNUMBER:
            return {
                ...state,
                value: state.value + 1
            };
        case CLEARNUMBER:
            return {
                ...state,
                value: state.value - 1
            };
        case SUBMITNUMBER:
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
};
