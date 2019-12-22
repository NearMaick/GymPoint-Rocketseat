export function registerRegistrationRequest(title, duration, price) {
  return {
    type: '@registration/REGISTER_REGISTRATION_REQUEST',
    payload: { title, duration, price },
  };
}

export function indexRegistrationRequest({ id, title, duration, price }) {
  return {
    type: '@registration/INDEX_REGISTRATION_REQUEST',
    payload: { id, title, duration, price },
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
