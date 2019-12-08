import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content } from './styles';
import logo from '~/assets/logoDash.svg';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <Link to="/student/index">ALUNOS</Link>
          <Link to="/plans/index">PLANOS</Link>
          <Link to="/registration/index">MATRÍCULAS</Link>
          <Link to="/help-order/index">PEDIDOS DE AUXÍLIO</Link>
        </nav>

        <aside>
          <strong>Maick Souza</strong>
          <a href="#none" onClick={handleSignOut}>
            Sair do sistema
          </a>
        </aside>
      </Content>
    </Container>
  );
}
