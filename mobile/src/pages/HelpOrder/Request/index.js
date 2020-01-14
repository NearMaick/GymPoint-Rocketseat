import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { helpOrderRequest } from '../../../store/modules/helpOrder/actions';

import Background from '../../../components/Background';
import { Container, Form, FormInput, SubmitButton } from './styles';

import api from '../../../services/api';

export default function Request({ navigation }) {
  const studentId = useSelector(state => state.auth.id);

  const dispatch = useDispatch();

  const [question, setQuestion] = useState();

  async function handleSubmit() {
    if (!question) {
      Alert.alert('Erro na solicitação', 'É necessario digitar sua pergunta');
    } else {
      await api.post(`students/${studentId}/help-orders`, {
        question,
      });

      Alert.alert('Sucesso', 'Solicitação feita com sucesso!');

      navigation.goBack();
    }
  }

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="Digite sua dúvida"
            value={question}
            onChangeText={setQuestion}
          />

          <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

Request.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
};
