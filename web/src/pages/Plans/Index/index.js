import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { indexPlanRequest } from '~/store/modules/plan/actions';

import { Container } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      const data = response.data.map(plans => ({
        ...plans,
      }));

      setPlan(data);
    }
    loadPlans();
  }, []);

  const dispatch = useDispatch();

  return (
    <Container>
      <div className="search">
        <h1>Gerenciando planos</h1>
        <div className="title">
          <Link to="/plans/create">
            <button className="btnPrimary" type="button">
              Cadastrar
            </button>
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
          {plan.map(plans => (
            <tr key={plan.id}>
              <td>{plans.title}</td>
              <td>{plans.duration}</td>
              <td>{plans.price}</td>
              <td className="actions">
                <button className="updateButton">editar</button>
                <button className="deleteButton">apagar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
