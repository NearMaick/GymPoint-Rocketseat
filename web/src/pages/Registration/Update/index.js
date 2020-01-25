import React, { useState, useEffect, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactSelect from 'react-select';

import { Form, Input } from '@rocketseat/unform';
import { startOfDay, format, addDays, addHours } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container } from './styles';
// import { registerStudentRequest } from '~/store/modules/student/actions';

export default function Student() {
  // const dispatch = useDispatch();
  const [registration, setRegistration] = useState({});
  const [dateEnd, setDateEnd] = useState();
  const [plan, setPlan] = useState({});
  const [student, setStudent] = useState([]);

  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);

  const [studentId, setStudentId] = useState();
  const [startDate, setStartDate] = useState(startOfDay(new Date()));

  const [price, setPrice] = useState('');
  const [month, setMonth] = useState('');
  const [planId, setPlanId] = useState();

  const [initialDate, setInitialDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    format(startOfDay(new Date()), 'dd/MM/yyyy')
  );
  const [showEndDate, setShowEndDate] = useState(
    format(startOfDay(new Date()), 'dd/MM/yyyy')
  );

  const { id } = useParams();

  useEffect(() => {
    async function loadRegistration() {
      const response = await api.get('registration', {
        params: { q: id },
      });

      setRegistration(response.data);
      setStartDate(new Date(response.data.start_date));
      setShowEndDate(format(new Date(response.data.end_date), 'dd/MM/yyyy'));
      setPlan(response.data.plans);
      setStudent(response.data.students);
    }
    loadRegistration();
  }, []);//eslint-disable-line

  useEffect(() => {
    document.title = 'GymPoint | Matrículas';

    async function loadStudents() {
      const response = await api.get('student', {
        params: { q: '' },
      });
      const data = response.data.map(s => ({
        ...s,
      }));

      setStudents(data);
    }

    async function loadPlans() {
      const response = await api.get('plans');
      const data = response.data.map(plns => ({
        ...plns,
      }));

      setPlans(data);
    }
    loadStudents();
    loadPlans();
  }, []); //eslint-disable-line

  console.tron.log(startDate);
  // console.tron.log(format(new Date(dateInit), 'yyyy-MM-dd'));

  const optStudent = students.map(std => ({
    value: `${std.id}`,
    label: `${std.name}`,
  }));

  const optPlan = plans.map(pln => ({
    value: `${pln.price}`,
    label: `${pln.title}`,
    ...pln,
  }));

  function getStudent(std) {
    setStudentId(std.value);
  }

  function calcPrice(value) {
    setPrice(value.price * value.duration);
    setMonth(value.duration);
    setPlanId(value.id);
  }

  function calcEndDate(date) {
    setInitialDate(format(date, 'yyyy-MM-dd'));
    setStartDate(date);
    setEndDate(format(addDays(date, month * 30), 'yyyy-MM-dd'));
    setShowEndDate(format(addDays(date, month * 30), 'dd/MM/yyyy'));
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
          placeholder={student.name}
          onChange={value => getStudent(value)}
        />
        <div>
          <ReactSelect
            name="optsPlan"
            options={optPlan}
            isSearchable={false}
            placeholder={plan.title}
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
          <Input name="end_date" placeholder={dateEnd} value={showEndDate} />
          <Input name="total" placeholder="100" value={price} />
        </div>
        <button type="submit">Enviar dados</button>
      </Form>
    </Container>
  );
}
