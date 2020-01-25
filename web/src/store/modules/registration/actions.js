export function registerRegistrationRequest(
  student_id,
  plan_id,
  start_date,
  end_date,
  price
) {
  return {
    type: '@registration/REGISTER_REGISTRATION_REQUEST',
    payload: { student_id, plan_id, start_date, end_date, price },
  };
}

export function indexRegistrationRequest(id) {
  return {
    type: '@registration/INDEX_REGISTRATION_REQUEST',
    payload: { id },
  };
}

export function updateRegistrationRequest({ id, title, duration, price }) {
  return {
    type: '@registration/UPDATE_REGISTRATION_REQUEST',
    payload: { id, title, duration, price },
  };
}

export function removeRegistrationRequest(id) {
  return {
    type: '@registration/REMOVE_REGISTRATION_REQUEST',
    payload: id,
  };
}
