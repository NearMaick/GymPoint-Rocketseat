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

export default all([
  takeLatest('@student/REGISTER_STUDENT_REQUEST', registerStudent),
]);
