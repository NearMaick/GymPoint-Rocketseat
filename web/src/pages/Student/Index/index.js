import React, { useEffect, useState } from 'react';
import { Input } from '@rocketseat/unform';
// import { Link } from 'react-router-dom';

import { Container } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('student');

      const data = response.data.map(students => ({
        ...students,
      }));

      setStudent(data);
    }
    loadStudents();
  }, []);

  return (
    <Container>
      <div>
        <button type="button">Cadastrar</button>
        <Input name="text" type="text" placeholder="Buscar aluno" />
      </div>

      <table>
        <thead>
          <th>Nome</th>
          <th>Email</th>
          <th>Idade</th>
          <th />
          <th />
        </thead>
        {student.map(students => (
          <tr key={students.id}>
            <td>{students.name}</td>
            <td>{students.email}</td>
            <td>{students.age}</td>
            <td>
              <a href="/student/update">editar</a>
            </td>
            <td>apagar</td>
          </tr>
        ))}
      </table>
    </Container>
  );
}
