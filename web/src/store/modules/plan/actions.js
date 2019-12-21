export function registerPlanRequest(title, duration, price) {
  return {
    type: '@plan/REGISTER_PLAN_REQUEST',
    payload: { title, duration, price },
  };
}

export function indexPlanRequest({ id, title, duration, price }) {
  return {
    type: '@plan/INDEX_PLAN_REQUEST',
    payload: { id, title, duration, price },
  };
}

export function updatePlanRequest({ id, title, duration, price }) {
  return {
    type: '@plan/UPDATE_PLAN_REQUEST',
    payload: { id, title, duration, price },
  };
}

export function removePlanRequest(id) {
  return {
    type: '@plan/REMOVE_PLAN_REQUEST',
    payload: id,
  };
}
