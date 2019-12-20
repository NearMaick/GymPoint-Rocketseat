import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { indexStudentRequest } from '~/store/modules/student/actions';

import { Container } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [student, setStudent] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('student', {
        params: { q: `${query}` },
      });
      const data = response.data.map(students => ({
        ...students,
      }));

      setStudent(data);
    }
    loadStudents();
  }, [query]);

  const dispatch = useDispatch();

  function updateStudent(students) {
    dispatch(indexStudentRequest(students));
  }

  async function handleSearch(event) {
    const { value } = event.target;
    setQuery(value);
  }

  return (
    <Container>
      <div className="search">
        <h1>Gerenciando alunos</h1>
        <div className="title">
          <Link to="/student/create">
            <button type="button">Cadastrar</button>
          </Link>
          <input
            name="text"
            type="text"
            placeholder="Buscar aluno"
            onChange={handleSearch}
          />
        </div>
      </div>

      <table>
        <thead>
          <th>Nome</th>
          <th>Email</th>
          <th>Idade</th>
          <th>Peso</th>
          <th>Altura</th>
        </thead>
        <tbody>
          {student.map(students => (
            <tr key={students.id}>
              <td>{students.name}</td>
              <td>{students.email}</td>
              <td>{students.age}</td>
              <td>{students.weight}</td>
              <td>{students.height}</td>
              <td className="actions">
                <button
                  className="updateButton"
                  type="button"
                  onClick={() =>
                    updateStudent({
                      id: students.id,
                      name: students.name,
                      email: students.email,
                      age: students.age,
                      weight: students.weight,
                      height: students.height,
                    })
                  }
                >
                  editar
                </button>
                <button className="deleteButton" type="button">
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
