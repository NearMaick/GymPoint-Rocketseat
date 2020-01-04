import { combineReducers } from 'redux';

import helpOrder from './helpOrder/reducer';
import auth from './auth/reducer';

export default combineReducers({
  helpOrder,
  auth,
});
