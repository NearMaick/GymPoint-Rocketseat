import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactSelect from 'react-select';
import { startOfDay, format, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Input, Select as RocketSelect } from '@rocketseat/unform';

import { Container } from './styles';

import { registerStudentRequest } from '~/store/modules/student/actions';

import api from '~/services/api';

export default function Student() {
  const [price, setPrice] = useState();
  const [month, setMonth] = useState();
  const [plan, setPlan] = useState([]);
  const [student, setStudent] = useState([]);
  const [startDate, setStartDate] = useState(startOfDay(new Date()));
  const [endDate, setEndDate] = useState(
    format(startOfDay(new Date()), 'dd/MM/yyyy')
  );

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      const data = response.data.map(plans => ({
        ...plans,
      }));

      setPlan(data);
    }

    async function loadStudents() {
      const response = await api.get('student', {
        params: { q: '' },
      });
      const data = response.data.map(students => ({
        ...students,
      }));

      setStudent(data);
    }
    loadPlans();
    loadStudents();
  }, []);

  const dispatch = useDispatch();

  function handleSubmit({
    optsStudent,
    optsPlan,
    initialDate,
    end_date,
    total,
  }) {
    // TODO
    console.tron.log(optsStudent, optsPlan, initialDate, end_date, total);
  }

  const optStudent = student.map(students => ({
    value: `${students.id}`,
    label: `${students.name}`,
  }));

  const optPlan = plan.map(plans => ({
    value: `${plans.price}`,
    label: `${plans.title}`,
    ...plans,
  }));

  function calcEndDate(date) {
    setStartDate(date);
    setEndDate(format(addDays(date, month * 30), 'dd/MM/yyyy'));
  }

  function calcPrice(value) {
    setPrice(value.price * value.duration);
    setMonth(value.duration);
    // TODO
    console.tron.log(value);
  }

  return (
    <Container>
      <h1>Cadastro de Matrícula</h1>
      <Form onSubmit={handleSubmit}>
        <ReactSelect
          name="optsStudent"
          isSearchable
          options={optStudent}
          placeholder="Selecione..."
          value={student.id}
        />
        <div>
          <ReactSelect
            name="optsPlan"
            options={optPlan}
            isSearchable={false}
            placeholder="Selecione..."
            onChange={value => calcPrice(value)}
          />
          <DatePicker
            name="initialDate"
            dateFormat="dd/MM/yyyy"
            locale={pt}
            onChange={date => calcEndDate(date)}
            selected={startDate}
            value={this}
          />
          <Input name="end_date" value={endDate} />
          <Input name="total" value={price} />
        </div>
        <button type="submit">Enviar dados</button>
      </Form>
    </Container>
  );
}
