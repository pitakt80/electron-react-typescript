import * as React from 'react';

import { AddNumberAction, ClearNumberAction, SubmitNumberAction } from '../actions/pinkeyActions';

require('./Pinkey.css');

export interface Props {
    value: number;

    pinPress: () => any;
    submitPress: () => any;
    clearPress: () => any;
}
const PinKey: React.SFC<Props> = ({ value, pinPress, submitPress, clearPress }) => (
    <div className="Pinkey">
        <form action="" method="" name="PINform" id="PINform">
            <input
                type="button"
                className="PINbutton"
                name="1"
                value="1"
                id="1"
                onClick={pinPress}
            />
            <input
                type="button"
                className="PINbutton"
                name="2"
                value="2"
                id="2"
                onClick={pinPress}
            />
            <input
                type="button"
                className="PINbutton"
                name="3"
                value="3"
                id="3"
                onClick={pinPress}
            />
            <input
                type="button"
                className="PINbutton"
                name="4"
                value="4"
                id="4"
                onClick={pinPress}
            />
            <input
                type="button"
                className="PINbutton"
                name="5"
                value="5"
                id="5"
                onClick={pinPress}
            />
            <input
                type="button"
                className="PINbutton"
                name="6"
                value="6"
                id="6"
                onClick={pinPress}
            />
            <input
                type="button"
                className="PINbutton"
                name="7"
                value="7"
                id="7"
                onClick={pinPress}
            />
            <input
                type="button"
                className="PINbutton"
                name="8"
                value="8"
                id="8"
                onClick={pinPress}
            />
            <input
                type="button"
                className="PINbutton"
                name="9"
                value="9"
                id="9"
                onClick={pinPress}
            />
            <input
                type="button"
                className="PINbutton"
                name="-"
                value="clear"
                id="-"
                onClick={clearPress}
            />
            <input
                type="button"
                className="PINbutton"
                name="0"
                value="0"
                id="0"
                onClick={pinPress}
            />
            <input
                type="button"
                className="PINbutton"
                name="+"
                value="submit"
                id="+"
                onClick={submitPress}
            />
        </form>
    </div>
);
export default PinKey;
