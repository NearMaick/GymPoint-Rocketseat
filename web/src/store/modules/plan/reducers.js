import produce from 'immer';
import history from '~/services/history';

const INITIAL_STATE = {};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/INDEX_PLAN_REQUEST': {
        draft.student = action.payload;
        history.push('/plans/update');
        break;
      }
      default:
    }
  });
}
