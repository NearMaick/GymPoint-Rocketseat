import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <div className="search">
        <h1>Gerenciando planos</h1>
        <div className="title">
          <Link to="">
            <button type="button">Cadastrar</button>
          </Link>
        </div>
      </div>

      <table>
        <thead>
          <th>Título</th>
          <th>Duração</th>
          <th>Valor Mensal</th>
          <th />
          <th />
        </thead>
        <tbody>
          <tr>
            <td>Ouro</td>
            <td>1 mês</td>
            <td>R$ 65,00</td>
            <td className="actions">
              <button className="updateButton">editar</button>
              <button className="deleteButton">apagar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
