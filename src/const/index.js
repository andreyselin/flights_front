export const dataStates = {
  initial: 'initial',
  loading: 'loading',
  fail:    'fail',
  success: 'success',
};

export const authStates = {
  authorized:   'authorized',
  unAuthorized: 'unAuthorized'
};

export const dataEvents = {
  loadingStarted:  'loadingStarted',
  notResponded:    'notResponded',
  authFailed:      'authFailed',
  loadingFinished: 'loadingFinished',
};

export const authEvents = {
  loggedIn:  'loggedIn',
  loggedOut: 'loggedOut',
};

export const localStorageKeys = {
  hasAcceptedCookies: 'hasAcceptedCookies'
};
