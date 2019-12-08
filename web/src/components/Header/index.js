import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import logo from '~/assets/logoDash.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <Link to="">ALUNOS</Link>
          <Link to="">PLANOS</Link>
          <Link to="">MATRÍCULAS</Link>
          <Link to="">MATRÍCULAS</Link>
          <Link to="">PEDIDOS DE AUXÍLIO</Link>
        </nav>

        <aside>
          <strong>Maick Souza</strong>
          <Link to="">Sair do sistema</Link>
        </aside>
      </Content>
    </Container>
  );
}
