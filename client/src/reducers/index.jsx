import { combineReducers } from 'redux';
import User from './User';
import Setting from './Setting';

const Reducer = combineReducers({
    User,
    Setting,
});

export default Reducer;