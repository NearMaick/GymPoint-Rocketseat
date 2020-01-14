export function helpOrderRequest(question, studentId) {
  return {
    type: '@helpOrder/HELP_ORDER_REQUEST',
    payload: { question, studentId },
  };
}

// export function updateProfileSuccess(profile) {
//   return {
//     type: '@user/UPDATE_PROFILE_SUCCESS',
//     payload: { profile },
//   };
// }

// export function updateProfileFailure() {
//   return {
//     type: '@user/UPDATE_PROFILE_FAILURE',
//   };
// }
