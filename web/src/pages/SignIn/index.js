import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GymPoint" />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Seu e-mail</label>
        <Input name="email" type="email" placeholder="example@email.com" />

        <label htmlFor="password">Sua senha</label>
        <Input name="password" type="password" placeholder="******" />

        <button type="submit">
          {loading ? 'Carregando' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
