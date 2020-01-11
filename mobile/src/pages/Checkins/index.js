import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Checkin from '../../components/Checkin';

import { Container, List, SubmitButton } from './styles';

import Background from '../../components/Background';

import api from '../../services/api';

export default function Checkins() {
  const studentId = useSelector(state => state.auth.id);

  const [checkins, setCheckins] = useState([]);

  async function loadCheckins() {
    const response = await api.get(`students/${studentId}/checkins`);
    setCheckins(response.data);
  }

  useEffect(() => {
    loadCheckins();
  }, []);

  async function handleSubmit() {
    await api.post(`students/${studentId}/checkins`);
    loadCheckins();
  }

  return (
    <Background>
      <Container>
        <SubmitButton onPress={handleSubmit}>Check-in</SubmitButton>
        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Checkin item={item} />}
        />
      </Container>
    </Background>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
};
