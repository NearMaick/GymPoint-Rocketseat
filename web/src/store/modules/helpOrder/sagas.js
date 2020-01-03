import { all, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

export function* helpOrderRegistration({ payload }) {
  const { answer, id } = payload;

  yield call(api.put, `students/help-orders/${id}/answer`, {
    answer,
  });
  console.tron.log('resposta registrada com sucesso');
}

export default all([
  takeLatest('@helpOrder/REGISTER_HELP_ORDER_REQUEST', helpOrderRegistration),
]);
