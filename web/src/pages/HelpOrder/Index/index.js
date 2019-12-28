import React from 'react';
// import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import Popup from 'reactjs-popup';
import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h1>Pedidos de auxílio</h1>

      <table>
        <thead>
          <th>Aluno</th>
          <th />
        </thead>
        <tr>
          <td>Maick Souza</td>
          <td>
            <Popup
              trigger={
                <button className="updateButton" type="button">
                  responder
                </button>
              }
              modal
              closeOnDocumentClick
            >
              <h2> Pergunta do aluno </h2>
              <p>
                Olá pessoal! Como faço para ganhar massa muscular sem ganhar
                peso?
              </p>
              <button type="button">responder</button>
            </Popup>
          </td>
        </tr>
      </table>
    </Container>
  );
}
