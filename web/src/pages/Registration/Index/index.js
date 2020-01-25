import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import {
  indexRegistrationRequest,
  removeRegistrationRequest,
} from '~/store/modules/registration/actions';

import { Container } from './styles';

import api from '~/services/api';

export default function Registration() {
  const [registration, setRegistration] = useState([]);

  useEffect(() => {
    document.title = 'GymPoint | Matrículas';

    async function loadRegistration() {
      const response = await api.get('registration', {
        params: { q: '' },
      });
      const data = response.data.map(registrations => ({
        ...registrations,
        startDate: format(parseISO(registrations.start_date), 'dd/MM/yyyy'),
        endDate: format(parseISO(registrations.end_date), 'dd/MM/yyyy'),
      }));

      setRegistration(data);
    }

    loadRegistration();
  }, []);

  const dispatch = useDispatch();

  function updateRegistration(id) {
    dispatch(indexRegistrationRequest(id));
  }

  function deleteRegistration(id) {
    const confirmDelete = window.confirm('Tem certeza?');

    if (confirmDelete) {
      dispatch(removeRegistrationRequest(id));
    }
  }
  // console.tron.log(active);

  return (
    <Container>
      <div className="search">
        <h1>Gerenciando matrículas</h1>
        <div className="title">
          <Link to="/registration/create">
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
          {registration.map(registrations => (
            <tr key={registrations.id}>
              <td>{registrations.students.name}</td>
              <td>{registrations.plans.title}</td>
              <td>{registrations.startDate}</td>
              <td>{registrations.endDate}</td>
              <td align="center">{registrations.is_active ? 'SIM' : 'NÃO'}</td>
              <td className="actions">
                <button
                  type="button"
                  className="updateButton"
                  onClick={() => updateRegistration(registrations.id)}
                >
                  editar
                </button>
                <button type="button" className="deleteButton">
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
