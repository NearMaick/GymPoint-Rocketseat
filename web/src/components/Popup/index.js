import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import ReactPopup from 'reactjs-popup';

import { registerHelpOrderRequest } from '~/store/modules/helpOrder/actions';

export default function Popup({ helpOrders }) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  function handleSubmit({ answer, id }) {
    dispatch(registerHelpOrderRequest(answer, id));
    setOpen(false);
  }
  return (
    <>
      <td>
        <ReactPopup onClose={() => setOpen(false)} open={open} modal>
          <Form onSubmit={handleSubmit}>
            <Input type="hidden" name="id" value={helpOrders.id} />
            <div className="modal">
              <div className="order">
                {helpOrders.question}
                <br />
                <Input name="answer" />
              </div>
              <div className="actions">
                <button type="submit" className="button">
                  Responder aluno
                </button>
              </div>
            </div>
          </Form>
        </ReactPopup>
      </td>
      <td>
        <button
          type="button"
          className="updateButton"
          onClick={() => setOpen(true)}
        >
          Responder
        </button>
      </td>
    </>
  );
}
// propTypes
ReactPopup.propTypes = {
  helpOrders: PropTypes.shape({
    question: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
