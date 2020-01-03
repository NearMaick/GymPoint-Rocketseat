export function registerHelpOrderRequest(answer, id) {
  return {
    type: '@helpOrder/REGISTER_HELP_ORDER_REQUEST',
    payload: { answer, id },
  };
}
