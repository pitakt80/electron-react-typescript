import { Reducer, combineReducers } from 'redux';

import { CounterState, counterReducer } from './counterReducer';
import { PinKeyState, pinkeyReducer } from './pinkeyReducer';

export interface RootState {
    counter: CounterState;
    pinkey: PinKeyState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    counter: counterReducer,
    pinkey: pinkeyReducer
});
