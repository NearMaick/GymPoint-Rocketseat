import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signRequest } from '../../store/modules/auth/actions';

import Background from '../../components/Background';
import { Container, Form, FormInput, SubmitButton } from './styles';

export default function Sign() {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  function handleSubmit() {
    dispatch(signRequest(id));
  }

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="Digite seu login"
            value={id}
            onChangeText={setId}
          />

          <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
