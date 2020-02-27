import { all, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

export function* registerRegistration({ payload }) {
  const { data } = payload;

  yield call(api.post, 'registration', data);

  console.tron.log('Matrícula cadastrada com sucesso');

  history.push('/registration/index');
}

export default all([
  takeLatest(
    '@registration/REGISTER_REGISTRATION_REQUEST',
    registerRegistration
  ),
]);
