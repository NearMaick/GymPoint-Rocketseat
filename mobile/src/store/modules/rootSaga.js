import { all } from 'redux-saga/effects';

import helpOrder from './helpOrder/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([helpOrder, auth]);
}
