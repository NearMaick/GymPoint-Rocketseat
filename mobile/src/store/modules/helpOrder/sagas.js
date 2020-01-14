import { Alert } from 'react-native';
/* eslint-disable prefer-object-spread */
import { takeLatest, call, all } from 'redux-saga/effects';

import api from '../../../services/api';

export function createHelpOrder({ payload }) {
  const { question, studentId } = payload;

  // yield call(api.post, 'students/10/help-orders', {
  //   question,
  // });

  // Alert.alert('Sucesso!', 'mensagem enviada com sucesso');
}

export default all([
  takeLatest('@helpOrder/HELP_ORDER_REQUEST', createHelpOrder),
]);
