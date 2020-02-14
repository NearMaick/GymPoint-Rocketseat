import React from 'react';
import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { registerStudentRequest } from '~/store/modules/student/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().required('Email é obrigatório'),
  age: Yup.number()
    .typeError('Este campo deve ser um número')
    .integer('Deve ser um número inteiro'),
  weight: Yup.number().typeError('Este campo deve ser um número'),
  height: Yup.number().typeError('Este campo deve ser um número'),
});

export default function Student() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, age, weight, height }) {
    dispatch(registerStudentRequest(name, email, age, weight, height));
  }

  return (
    <Container>
      <h1>StudentCreate</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Seu endereço de email" />
        <Input name="age" placeholder="Idade" />
        <Input name="weight" placeholder="Peso" />
        <Input name="height" placeholder="Altura" />

        <button className="btnPrimary" type="submit">
          Enviar dados
        </button>
      </Form>
    </Container>
  );
}
