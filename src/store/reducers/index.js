import { combineReducers } from 'redux';// Imports: Reducers
import userReducer from './userReducer';
import notificationReducer from './notificationReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  userReducer: userReducer,
  notificationReducer: notificationReducer,
});

export default rootReducer;
