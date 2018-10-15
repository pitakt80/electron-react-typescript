import { Action, ActionCreator } from 'redux';

export const ADDNUMBER = 'ADDNUMBER';
export const CLEARNUMBER = 'CLEARNUMBER';
export const SUBMITNUMBER = 'SUBMITNUMBER';

export interface AddNumberAction extends Action {
    type: 'ADDNUMBER';
}

export interface ClearNumberAction extends Action {
    type: 'CLEARNUMBER';
}

export interface SubmitNumberAction extends Action {
    type: 'SUBMITNUMBER';
}

export const add: ActionCreator<AddNumberAction> = () => ({
    type: ADDNUMBER
});

export const clear: ActionCreator<ClearNumberAction> = () => ({
    type: CLEARNUMBER
});

export const submit: ActionCreator<SubmitNumberAction> = () => ({
    type: SUBMITNUMBER
});

export type PinKeyAction = AddNumberAction | ClearNumberAction | SubmitNumberAction;
