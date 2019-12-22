import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  indexRegistrationRequest,
  removeRegistrationRequest,
} from '~/store/modules/registration/actions';

import { Container } from './styles';

import api from '~/services/api';

export default function Registration() {
  const [registration, setRegistration] = useState([]);
  let active;
  useEffect(() => {
    async function loadRegistration() {
      const response = await api.get('registration');
      const data = response.data.map(registrations => ({
        active: registrations.is_active,
        ...registrations,
      }));

      setRegistration(data);
    }
    loadRegistration();
  }, []);

  const dispatch = useDispatch();

  function updateRegistration(plans) {
    dispatch(indexRegistrationRequest(plans));
  }

  function deleteRegistration(id) {
    const confirmDelete = window.confirm('Tem certeza?');

    if (confirmDelete) {
      dispatch(removeRegistrationRequest(id));
    }
  }
  console.tron.log(active);

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
          {registration.map(registrations => (
            <tr key={registrations.id}>
              <td>{registrations.id}</td>
              <td>Ouro</td>
              <td>{registrations.start_date}</td>
              <td>{registrations.end_date}</td>
              <td align="center">{registrations.is_active ? 'SIM' : 'NÃO'}</td>
              <td className="actions">
                <button type="button" className="updateButton">
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
