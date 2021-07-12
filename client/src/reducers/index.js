import { combineReducers } from 'redux';

import authReducer from './authReducer';

export default combineReducers({
  // Add reducers here
  auth: authReducer,
});
