import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateStudentRequest } from '~/store/modules/student/actions';

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
  const { student } = useSelector(state => state.student);
  console.tron.log(student);
  function handleSubmit(name, email, age, weight, height) {
    // console.tron.log(name, email, age, weight, height);
    dispatch(updateStudentRequest(name, email, age, weight, height));
  }

  return (
    <Container>
      <div className="search">
        <h1>Edição de aluno</h1>
        <div className="title">
          <button type="button">Voltar</button>
          <button form="student" type="submit">
            Salvar
          </button>
        </div>
      </div>
      <Form
        schema={schema}
        id="student"
        initialData={student}
        onSubmit={handleSubmit}
      >
        <Input name="id" type="hidden" readOnly />
        <Input name="name" placeholder="Seu Nome" />
        <Input name="email" placeholder="Seu endereço de email" />
        <div>
          <Input name="age" placeholder="Idade" />
          <Input name="weight" placeholder="Peso" />
          <Input name="height" placeholder="Altura" />
        </div>
      </Form>
    </Container>
  );
}
