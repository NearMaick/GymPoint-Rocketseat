const INITIAL_STATE = {};

export default function student(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// import produce from 'immer';

// const INITIAL_STATE = {
//   profile: null,
// };

// export default function user(state = INITIAL_STATE, action) {
//   return produce(state, draft => {
//     switch (action.type) {
//       case '@auth/SIGN_IN_SUCCESS': {
//         draft.profile = action.payload.user;
//         break;
//       }
//       case '@user/UPDATE_PROFILE_SUCCESS': {
//         draft.profile = action.payload.profile;
//         break;
//       }
//       default:
//     }
//   });
// }
