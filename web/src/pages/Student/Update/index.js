import React from 'react';
// import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

// import { registerStudentRequest } from '~/store/modules/student/actions';

export default function Student() {
  // const dispatch = useDispatch();

  function handleSubmit({ name, email, age, weight, height }) {
    // dispatch(registerStudentRequest(name, email, age, weight, height));
  }

  return (
    <Container>
      <h1>StudentUpadte</h1>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de email" />
        <Input name="age" placeholder="Idade" />
        <Input name="weight" placeholder="Peso" />
        <Input name="height" placeholder="Altura" />

        <button type="submit">Enviar dados</button>
      </Form>
    </Container>
  );
}
