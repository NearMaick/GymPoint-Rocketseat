import React from 'react';
import { View } from 'react-native';

import { Container, Title } from './styles';

import Background from '../../components/Background';

export default function Checkins() {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
      </Container>
    </Background>
  );
}
