import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import { registerPlanRequest } from '~/store/modules/plan/actions';

export default function Plans() {
  const dispatch = useDispatch();

  function handleSubmit({ title, duration, price }) {
    dispatch(registerPlanRequest(title, duration, price));
  }

  return (
    <Container>
      <h1>PlansCreate</h1>
      <Form onSubmit={handleSubmit}>
        <Input name="title" placeholder="Título" />
        <Input name="duration" placeholder="Duração" />
        <Input name="priceUnity" placeholder="Preço Mensal" />
        <Input name="price" placeholder="Preço Total" />

        <button type="submit">Enviar dados</button>
      </Form>
    </Container>
  );
}
