import { all } from 'redux-saga/effects';

import student from './student/sagas';
import auth from './auth/sagas';
import plan from './plan/sagas';
import registration from './registration/sagas';
import helpOrder from './helpOrder/sagas';

export default function* rootSaga() {
  return yield all([student, auth, plan, registration, helpOrder]);
}
