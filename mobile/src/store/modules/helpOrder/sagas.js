import { Alert } from 'react-native';
/* eslint-disable prefer-object-spread */
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { helpOrderRequest } from './actions';

export function* createHelpOrder({ payload }) {
  try {
    const { question } = payload;

    const response = yield call(api.post, 'students/10/helporders', {
      question,
    });

    Alert.alert('Sucesso!', 'mensagem enviada com sucesso');

    yield put(helpOrderRequest(response.data));
  } catch (err) {
    Alert.alert('Falha no envio dos dados', 'verifique seus dados');
  }
}

export default all([
  takeLatest('@helpOrder/HELP_ORDER_REQUEST', createHelpOrder),
]);
