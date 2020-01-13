import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { helpOrderRequest } from '../../../store/modules/helpOrder/actions';

import api from '../../../services/api';

import Background from '../../../components/Background';
import { Container, Form, FormInput, SubmitButton, List, Text } from './styles';

export default function ListOrders({ navigation }) {
  const studentId = useSelector(state => state.auth.id);

  const [questions, setQuestions] = useState([]);

  const dispatch = useDispatch();

  async function loadQuestions() {
    const response = await api.get(`students/${studentId}/help-orders`);
    setQuestions(response.data);
  }

  useEffect(() => {
    loadQuestions();
  }, []);

  function handleSubmit() {
    navigation.navigate('Request');
  }

  return (
    <Background>
      <Container>
        <SubmitButton onPress={handleSubmit}>Check-in</SubmitButton>
        <List
          data={questions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <>
              <Text>{item.id}</Text>
              <Text>{item.question}</Text>
              <Text>{item.answer ? 'Respondido' : 'Não respondido'}</Text>
            </>
          )}
        />
      </Container>
    </Background>
  );
}
