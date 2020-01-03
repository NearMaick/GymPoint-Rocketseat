import { all, call, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/services/history';

export function* registerRegistration({ payload }) {
  const { student_id, plan_id, start_date, end_date, price } = payload;

  yield call(api.post, 'registration', {
    student_id,
    plan_id,
    start_date,
    end_date,
    price,
  });

  console.tron.log('Matrícula cadastrada com sucesso');

  history.push('/registration/index');
}

export default all([
  takeLatest(
    '@registration/REGISTER_REGISTRATION_REQUEST',
    registerRegistration
  ),
]);
