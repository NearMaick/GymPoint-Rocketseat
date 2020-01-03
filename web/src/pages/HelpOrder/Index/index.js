import React, { useState, useEffect } from 'react';
import Popup from '~/components/Popup';
import { Container } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [helpOrder, setHelpOrder] = useState([]);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get('students/help-orders');
      const data = response.data.map(helpOrders => ({
        ...helpOrders,
      }));
      setHelpOrder(data);
    }
    loadHelpOrders();
  }, []);

  return (
    <Container>
      <h1>Pedidos de auxílio</h1>

      <table>
        <thead>
          <th>Aluno</th>
          <th />
        </thead>
        <tbody>
          {helpOrder.map(helpOrders => (
            <tr key={helpOrders.id}>
              <td>{helpOrders.students.name}</td>
              <Popup helpOrders={helpOrders} />
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
