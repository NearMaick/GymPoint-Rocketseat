import { combineReducers } from 'redux';

import auth from './auth/reducer';
import student from './student/reducer';
import plan from './plan/reducers';

export default combineReducers({
  student,
  auth,
  plan,
});
