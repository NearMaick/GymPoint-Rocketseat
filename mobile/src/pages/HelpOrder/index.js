import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { helpOrderRequest } from '../../store/modules/helpOrder/actions';

import Background from '../../components/Background';
import { Container, Form, FormInput, SubmitButton } from './styles';

export default function HelpOrder() {
  const dispatch = useDispatch();

  const [question, setQuestion] = useState('');

  function handleSubmit() {
    dispatch(helpOrderRequest(question));
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
