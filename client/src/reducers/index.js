import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';

export default combineReducers({
  // Add reducers here
  auth: authReducer,
  // Reducer for redux-form and form handling
  form: formReducer,
});
