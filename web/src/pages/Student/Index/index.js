import React from 'react';
// import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <h1>StudentIndex</h1>
      <table>
        <thead>
          <th>Nome</th>
          <th>Email</th>
          <th>Idade</th>
          <th />
          <th />
        </thead>
        <tr>
          <td>Maick Souza</td>
          <td>maick_a_s@msn.com</td>
          <td>25</td>
          <td>editar</td>
          <td>apagar</td>
        </tr>

        <tr>
          <td>Enilda Jesus</td>
          <td>enilda_jesus@msn.com</td>
          <td>61</td>
          <td>editar</td>
          <td>apagar</td>
        </tr>
      </table>
    </>
  );
}
