import { combineReducers } from 'redux';
import user from './user';
import product from './product';

const Reducer = combineReducers({
    user,
    product,
});

export default Reducer;