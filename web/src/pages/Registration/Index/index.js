import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <div className="search">
        <h1>Gerenciando matrículas</h1>
        <div className="title">
          <Link to="/student/create">
            <button className="btnPrimary" type="button">
              Cadastrar
            </button>
          </Link>
        </div>
      </div>
      <table>
        <thead>
          <th>Aluno</th>
          <th>Plano</th>
          <th>Início</th>
          <th>Término</th>
          <th>Ativo?</th>
          <th />
          <th />
        </thead>
        <tbody>
          <tr>
            <td>Maick Souza</td>
            <td>Ouro</td>
            <td>15 dezembro 2019</td>
            <td>15 Janeiro de 2020</td>
            <td>
              <input type="checkbox" checked={false} />
            </td>
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
