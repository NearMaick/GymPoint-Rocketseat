export function registerStudentRequest(name, email, age, weight, height) {
  return {
    type: '@student/REGISTER_STUDENT_REQUEST',
    payload: { name, email, age, weight, height },
  };
}

export function indexStudentRequest({ id, name, email, age, weight, height }) {
  return {
    type: '@student/INDEX_STUDENT_REQUEST',
    payload: { id, name, email, age, weight, height },
  };
}

export function updateStudentRequest({ id, name, email, age, weight, height }) {
  return {
    type: '@student/UPDATE_STUDENT_REQUEST',
    payload: { id, name, email, age, weight, height },
  };
}
