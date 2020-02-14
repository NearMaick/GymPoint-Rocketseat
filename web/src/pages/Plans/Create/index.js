import React from 'react';
import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { registerPlanRequest } from '~/store/modules/plan/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Nome do título é obrigatório'),
  duration: Yup.number()
    .typeError('Este campo deve ser um número')
    .integer('Deve ser um número inteiro'),
  priceUnity: Yup.number().typeError('Este campo deve ser um número'),
  price: Yup.number().typeError('Este campo deve ser um número'),
});

export default function Plans() {
  const dispatch = useDispatch();

  function handleSubmit({ title, duration, price }) {
    dispatch(registerPlanRequest(title, duration, price));
  }
  // TODO resolver a validação no reducer
  return (
    <Container>
      <h1>PlansCreate</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Título" />
        <Input name="duration" placeholder="Duração" />
        <Input name="priceUnity" placeholder="Preço Mensal" />
        <Input name="price" placeholder="Preço Total" />

        <button type="submit">Enviar dados</button>
      </Form>
    </Container>
  );
}
