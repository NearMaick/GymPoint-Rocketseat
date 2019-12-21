import { all, call, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';

export function* registerPlan({ payload }) {
  const { title, duration, price } = payload;

  yield call(api.post, 'plans', { title, duration, price });

  console.tron.log('Plano cadastrado com sucesso');

  history.push('/plans/index');
}

export function* updatePlan({ payload }) {
  const data = payload;
  const { id } = payload;

  yield call(api.put, `plans/${id}`, data);

  console.tron.log('plano atualizado com sucesso');

  history.push('/plans/index');
}

export function* deletePlan({ payload }) {
  const { id } = payload;

  yield call(api.delete, `plans/${id}`);
  console.tron.log('apagado com sucesso');

  window.location.reload();
}

export default all([
  takeLatest('@plan/REGISTER_PLAN_REQUEST', registerPlan),
  takeLatest('@plan/UPDATE_PLAN_REQUEST', updatePlan),
  takeLatest('@plan/REMOVE_PLAN_REQUEST', deletePlan),
]);
