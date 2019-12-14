import produce from 'immer';
import history from '~/services/history';

const INITIAL_STATE = {};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/UPDATE_STUDENT_REQUEST': {
        draft.student = action.payload;
        history.push('/student/update');
        break;
      }
      default:
    }
  });
}
