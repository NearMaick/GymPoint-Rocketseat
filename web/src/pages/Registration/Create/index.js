import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import ReactSelect from 'react-select';

import 'react-datepicker/dist/react-datepicker.css';
import { Form, Input } from '@rocketseat/unform';
import { startOfDay, format, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import * as Yup from 'yup';

import api from '~/services/api';
import { registerRegistrationRequest } from '~/store/modules/registration/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  optsStudent: Yup.string(),
  optsPlan: Yup.string(),
  initialDate: Yup.date(),
  stdId: Yup.number(),
  plnId: Yup.number(),
  initial_date: Yup.date(),
  end_date: Yup.string(),
  total: Yup.number(),
});

export default function Student() {
  const [student, setStudent] = useState([]);
  const [plan, setPlan] = useState([]);

  const [month, setMonth] = useState('');
  const [startDate, setStartDate] = useState(startOfDay(new Date()));

  const [endDate, setEndDate] = useState(
    format(startOfDay(new Date()), 'dd/MM/yyyy')
  );
  const [showEndDate, setShowEndDate] = useState(
    format(startOfDay(new Date()), 'dd/MM/yyyy')
  );

  const [price, setPrice] = useState('');

  const [studentId, setStudentId] = useState();
  const [planId, setPlanId] = useState();
  const [initialDate, setInitialDate] = useState(new Date());

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
  }, [initialDate, startDate]);
  /**
   * Loading lists on inputs selects
   */
  const optStudent = student.map(students => ({
    value: `${students.id}`,
    label: `${students.name}`,
  }));

  const optPlan = plan.map(plans => ({
    value: `${plans.price}`,
    label: `${plans.title}`,
    ...plans,
  }));

  function getStudent(students) {
    setStudentId(students.value);
  }

  function calcEndDate(date) {
    setInitialDate(format(date, 'yyyy-MM-dd'));
    setStartDate(date);
    setEndDate(format(addDays(date, month * 30), 'yyyy-MM-dd'));
    setShowEndDate(format(addDays(date, month * 30), 'dd/MM/yyyy'));
  }

  function calcPrice(value) {
    setPrice(value.price * value.duration);
    setMonth(value.duration);
    setPlanId(value.id);
  }

  const dispatch = useDispatch();

  function handleSubmit({ stdId, plnId, initial_date, end_date, total }) {
    end_date = endDate;
    // TODO
    dispatch(
      registerRegistrationRequest(stdId, plnId, initial_date, end_date, total)
    );
  }

  return (
    <Container>
      <h1>Cadastro de Matrícula</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <ReactSelect
          name="optsStudent"
          isSearchable
          options={optStudent}
          placeholder="Selecione..."
          onChange={value => getStudent(value)}
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
          <Input type="hidden" name="stdId" value={studentId} />
          <Input type="hidden" name="plnId" value={planId} />
          <Input type="hidden" name="initial_date" value={initialDate} />
          <Input name="end_date" value={showEndDate} />
          <Input name="total" value={price} />
        </div>
        <button type="submit">Enviar dados</button>
      </Form>
    </Container>
  );
}
