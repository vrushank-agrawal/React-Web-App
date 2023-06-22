import { combineReducers } from 'redux';// Imports: Reducers
import brandsReducer from './brandsReducer';
import userReducer from './userReducer';
import notificationReducer from './notificationReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  brandsReducer: brandsReducer,
  userReducer: userReducer,
  notificationReducer: notificationReducer,
});

export default rootReducer;
