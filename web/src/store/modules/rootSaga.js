import { all } from 'redux-saga/effects';

import student from './student/sagas';
import auth from './auth/sagas';
import plan from './plan/sagas';

export default function* rootSaga() {
  return yield all([student, auth, plan]);
}
