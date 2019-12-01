import React from 'react';

import Background from '../../components/Background';
import { Container, Form, FormInput, SubmitButton } from './styles';

export default function HelpOrder() {
  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Form>
          <FormInput icon="mail-outline" placeholder="Digite sua dúvida" />

          <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
