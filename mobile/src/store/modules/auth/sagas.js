import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { signSuccess, signFailure } from './actions';

export function* sign({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `/sign-student/${id}`, {
      id,
    });

    console.tron.log(response);

    // if (user.provider) {
    //   Alert.alert(
    //     'Erro de login',
    //     'O usuário não pode ser prestador de serviços',
    //   );
    //   return;
    // }

    // yield delay(3000);

    yield put(signSuccess(id));

    //   history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados',
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    //  history.push('/');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro na cadastro, verifique seus dados',
    );

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { id } = payload;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_REQUEST', sign),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
