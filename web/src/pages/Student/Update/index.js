import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import { updateStudentRequest } from '~/store/modules/student/actions';

export default function Student() {
  const dispatch = useDispatch();
  const { student } = useSelector(state => state.student);

  function handleSubmit(name, email, age, weight, height) {
    // console.tron.log(name, email, age, weight, height);
    dispatch(updateStudentRequest(name, email, age, weight, height));
  }

  return (
    <Container>
      <h1>StudentUpdate</h1>
      <Form initialData={student} onSubmit={handleSubmit}>
        <Input name="id" type="hidden" readOnly />
        <Input name="name" placeholder="Seu Nome" />
        <Input name="email" placeholder="Seu endereço de email" />
        <Input name="age" placeholder="Idade" />
        <Input name="weight" placeholder="Peso" />
        <Input name="height" placeholder="Altura" />

        <button type="submit">Enviar dados</button>
      </Form>
    </Container>
  );
}
