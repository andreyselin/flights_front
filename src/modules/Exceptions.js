export const mExceptions = {
  isAny: input => input && typeof input.status === 'number' && input.status > 9999
};
