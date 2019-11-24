export function registerStudentRequest(name, email, age, weight, height) {
  return {
    type: '@student/REGISTER_STUDENT_REQUEST',
    payload: { name, email, age, weight, height },
  };
}
