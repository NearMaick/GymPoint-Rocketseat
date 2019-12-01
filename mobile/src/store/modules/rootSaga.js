import { all } from 'redux-saga/effects';

import helpOrder from './helpOrder/sagas';

export default function* rootSaga() {
  return yield all([helpOrder]);
}
