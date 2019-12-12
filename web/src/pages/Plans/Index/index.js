import React from 'react';
// import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <h1>PlansIndex</h1>

      <table>
        <thead>
          <th>Título</th>
          <th>Duração</th>
          <th>Valor Mensal</th>
          <th />
          <th />
        </thead>
        <tr>
          <td>Ouro</td>
          <td>1 mês</td>
          <td>R$ 65,00</td>
          <td>editar</td>
          <td>apagar</td>
        </tr>

        <tr>
          <td>Bronze</td>
          <td>3 mês</td>
          <td>R$ 95,00</td>
          <td>editar</td>
          <td>apagar</td>
        </tr>
      </table>
    </>
  );
}
