import React from 'react';
import Popup from 'reactjs-popup';
// import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h1>Answer</h1>
      <Popup
        trigger={
          <button className="button" type="button">
            Abrir pergunta
          </button>
        }
        modal
        closeOnDocumentClick
      >
        <span> Deixe sua dúvida aqui </span>
      </Popup>
    </Container>
  );
}
