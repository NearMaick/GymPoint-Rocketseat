import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactPopup from 'reactjs-popup';

import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { registerHelpOrderRequest } from '~/store/modules/helpOrder/actions';

const schema = Yup.object().shape({
  id: Yup.number(),
  answer: Yup.string().required('Nome é obrigatório'),
});

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
          <Form schema={schema} onSubmit={handleSubmit}>
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
