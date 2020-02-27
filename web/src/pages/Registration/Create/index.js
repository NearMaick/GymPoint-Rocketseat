import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Form } from '@unform/web';
import { startOfDay, format, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import DatePicker from '~/components/Form/DatePicker';
import Input from '~/components/Form/Input';
import Select from '~/components/Form/Select';
import api from '~/services/api';
import { registerRegistrationRequest } from '~/store/modules/registration/actions';

import { Container } from './styles';

export default function Student() {
  const [student, setStudent] = useState([]);
  const [plan, setPlan] = useState([]);

  const [showEndDate, setShowEndDate] = useState(
    format(startOfDay(new Date()), 'dd/MM/yyyy')
  );

  const [price, setPrice] = useState('');

  const [startDate, setStartDate] = useState(startOfDay(new Date()));
  const [endDate, setEndDate] = useState(startOfDay(new Date()));

  const [month, setMonth] = useState('');

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
  /**
   * Loading lists on inputs selects
   */
  const optStudent = student.map(students => ({
    value: `${students.id}`,
    label: `${students.name}`,
  }));

  const optPlan = plan.map(plans => ({
    value: `${plans.id}`,
    label: `${plans.title}`,
    ...plans,
  }));

  function calcEndDate(date) {
    setStartDate(date);
    setShowEndDate(format(addDays(date, month * 30), 'dd/MM/yyyy'));
    setEndDate(startOfDay(addDays(date, month * 30)));
  }

  function calcPrice(value) {
    setPrice(value.price * value.duration);
    setMonth(value.duration);
    // setPlanId(value.id);
  }

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(registerRegistrationRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Select
          name="student_id"
          isSearchable
          options={optStudent}
          placeholder="Selecione..."
        />
        <div>
          <Select
            name="plan_id"
            options={optPlan}
            isSearchable={false}
            placeholder="Selecione..."
            onChange={value => calcPrice(value)}
          />
          <DatePicker
            name="start_date"
            dateFormat="dd/MM/yyyy"
            locale={pt}
            onChange={date => calcEndDate(date)}
            selected={startDate}
            value={this}
          />
          <DatePicker
            name="end_date"
            dateFormat="dd/MM/yyyy"
            locale={pt}
            onChange={date => calcEndDate(date)}
            selected={endDate}
          />

          <Input name="price" value={price} />
        </div>
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
