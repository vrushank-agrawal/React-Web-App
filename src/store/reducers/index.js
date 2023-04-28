import { combineReducers } from 'redux';// Imports: Reducers
import userReducer from './userReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
