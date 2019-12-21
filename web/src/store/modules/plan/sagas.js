import { all, call, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';

export function* registerPlan({ payload }) {
  const { id, title, duration, price } = payload;

  yield call(api.post, 'plan', { id, title, duration, price });

  // history.push('/');
}

export function* updatePlan({ payload }) {
  const data = payload;
  const { id } = payload;

  yield call(api.put, `plan/${id}`, data);

  console.tron.log('plano atualizado com sucesso');

  history.push('/plan/index');
}

export function* deletePlan({ payload }) {
  const { id } = payload;

  yield call(
    api.delete({
      where: { id },
    })
  );
}

export default all([
  takeLatest('@plan/REGISTER_PLAN_REQUEST', registerPlan),
  takeLatest('@plan/UPDATE_PLAN_REQUEST', updatePlan),
]);
