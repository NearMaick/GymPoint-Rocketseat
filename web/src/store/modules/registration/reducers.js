import produce from 'immer';

import history from '~/services/history';

const INITIAL_STATE = {};

export default function registration(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@registration/INDEX_REGISTRATION_REQUEST': {
        draft.registration = action.payload;
        console.tron.log(draft);
        history.push(`/registration/update/${draft.registration.id}`);
        break;
      }
      default:
    }
  });
}
