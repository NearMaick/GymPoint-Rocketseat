import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import { updatePlanRequest } from '~/store/modules/plan/actions';

export default function Plans() {
  const dispatch = useDispatch();
  const { plan } = useSelector(state => state.plan);
  console.tron.log(plan);
  function handleSubmit(title, duration, price) {
    dispatch(updatePlanRequest(title, duration, price));
  }

  return (
    <Container>
      <Form initialData={plan} onSubmit={handleSubmit}>
        <Input name="id" />
        <Input name="title" />
        <Input name="duration" />
        <Input name="price" />

        <button type="submit">Enviar dados</button>
      </Form>
    </Container>
  );
}
