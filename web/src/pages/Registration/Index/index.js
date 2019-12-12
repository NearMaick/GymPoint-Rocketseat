import React from 'react';
// import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <h1>RegistrationIndex</h1>

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
        <tr>
          <td>Maick Souza</td>
          <td>Ouro</td>
          <td>15 dezembro 2019</td>
          <td>15 Janeiro de 2020</td>
          <td>
            <input type="checkbox" checked={false} />
          </td>
          <td>editar</td>
          <td>apagar</td>
        </tr>

        <tr>
          <td>Maick Souza</td>
          <td>Ouro</td>
          <td>15 dezembro 2019</td>
          <td>15 Janeiro de 2020</td>
          <td>
            <input type="checkbox" checked={false} />
          </td>
          <td>editar</td>
          <td>apagar</td>
        </tr>
      </table>
    </>
  );
}
