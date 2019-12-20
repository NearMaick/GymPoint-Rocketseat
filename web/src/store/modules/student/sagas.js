import { all, call, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';

export function* registerStudent({ payload }) {
  const { name, email, age, weight, height } = payload;

  yield call(api.post, 'student', {
    name,
    email,
    age,
    weight,
    height,
    is_active: false,
  });

  // history.push('/');
}

export function* updateStudent({ payload }) {
  const data = payload;
  const { id } = payload;

  yield call(api.put, `student/${id}`, data);

  console.tron.log('perfil atualizado com sucesso');

  history.push('/student/index');
}

export default all([
  takeLatest('@student/REGISTER_STUDENT_REQUEST', registerStudent),
  takeLatest('@student/UPDATE_STUDENT_REQUEST', updateStudent),
]);
