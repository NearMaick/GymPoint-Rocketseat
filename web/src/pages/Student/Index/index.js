import React, { useEffect, useState } from 'react';
import { Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateStudentRequest } from '~/store/modules/student/actions';

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

  const dispatch = useDispatch();
  // console.tron.log(student);
  function updateStudent(students) {
    dispatch(updateStudentRequest(students));
  }

  return (
    <Container>
      <div>
        <Link to="/student/create">
          <button type="button">Cadastrar</button>
        </Link>
        <Input name="text" type="text" placeholder="Buscar aluno" />{' '}
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
              <button
                type="button"
                onClick={() =>
                  updateStudent({
                    id: students.id,
                    name: students.name,
                    email: students.email,
                    age: students.age,
                  })
                }
              >
                editar
              </button>
            </td>
            <td>apagar</td>
          </tr>
        ))}
      </table>
    </Container>
  );
}
