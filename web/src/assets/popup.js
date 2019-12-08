import React from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logoDash.svg';

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Popup
        trigger={
          <button className="button" type="button">
            Open Modal
          </button>
        }
        modal
        closeOnDocumentClick
      >
        <span> Modal content </span>
      </Popup>
    </>
  );
}
