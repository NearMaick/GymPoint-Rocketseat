import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Student() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de email" />
        <Input name="age" placeholder="Idade" />
        <Input name="weight" placeholder="Peso" />
        <Input name="height" placeholder="Altura" />
      </Form>
    </Container>
  );
}
