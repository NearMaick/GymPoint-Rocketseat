import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Container, Text } from './styles';

export default function Checkin({ item }) {
  return (
    <Container>
      <Text>{item.id}</Text>
      <Text>{item.createdAt}</Text>
    </Container>
  );
}

Checkin.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    createdAt: PropTypes.string,
  }),
};

Checkin.defaultProps = {
  item: {
    id: null,
    createdAt: null,
  },
};
