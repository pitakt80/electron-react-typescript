import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Pinkey from '../components/Pinkey';
import { RootState } from '../reducers';
import { PinKeyAction, add, clear, submit } from '../actions/pinkeyActions';

const mapStateToProps = (state: RootState) => ({
    value: state.pinkey.value
});

const mapDispatchToProps = (dispatch: Dispatch<PinKeyAction>) => ({
    pinPress: () => dispatch(add()),
    clearPress: () => dispatch(clear()),
    submitPress: () => dispatch(submit())
});

export default connect(mapStateToProps, mapDispatchToProps)(Pinkey);
