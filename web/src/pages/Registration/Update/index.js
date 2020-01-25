import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import ReactSelect from 'react-select';

import { startOfDay, format, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import api from '~/services/api';
// import { registerStudentRequest } from '~/store/modules/student/actions';

export default function Student() {
  // const dispatch = useDispatch();
  const [registration, setRegistration] = useState({});
  const [plans, setPlans] = useState({});
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState([]);
  const [studentId, setStudentId] = useState();

  const { id } = useParams();
  /**
   * Tasks: Refatorar este codigo
   * commitzen/husky
   * imports organization
   */
  useEffect(() => {
    async function loadRegistration() {
      const response = await api.get('registration', {
        params: { q: id },
      });

      setRegistration(response.data);
      setPlans(response.data.plans);
      setStudents(response.data.students);
    }
    loadRegistration();
  }, []);//eslint-disable-line

  const [startDate, setStartDate] = useState(startOfDay(new Date()));
  useEffect(() => {
    document.title = 'GymPoint | Matrículas';

    async function loadStudents() {
      const response = await api.get('student', {
        params: { q: '' },
      });
      const data = response.data.map(students => ({
        ...students,
      }));

      setStudent(data);
    }
    loadStudents();
  }, []); //eslint-disable-line

  const optStudent = student.map(std => ({
    value: `${std.id}`,
    label: `${std.name}`,
  }));

  function getStudent(students) {
    setStudentId(students.value);
  }

  // TODO

  function handleSubmit({ name, email, age, weight, height }) {
    // dispatch(registerStudentRequest(name, email, age, weight, height));
  }

  return (
    <Container>
      <h1>RegistrationUpdate</h1>
      <Form onSubmit={handleSubmit}>
        <ReactSelect
          name="optsStudent"
          isSearchable
          options={optStudent}
          placeholder={students.name}
          // onChange={value => getStudent(value)}
        />
        <Input name="email" placeholder={plans.title} />
        <Input name="age" placeholder="Idade" />
        <Input name="weight" placeholder="Peso" />
        <Input name="height" placeholder="Altura" />
        <DatePicker
          name="initialDate"
          dateFormat="dd/MM/yyyy"
          locale={pt}
          // onChange={date => calcEndDate(date)}
          selected={startDate}
          value={this}
        />

        <button type="submit">Enviar dados</button>
      </Form>
    </Container>
  );
}
