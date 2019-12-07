import { all } from 'redux-saga/effects';

import student from './student/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([student, auth]);
}
