import {withLeadingNull} from "../utilities";

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


export const monthNames = [
  'Январь', 'Февраль', 'Март',     'Апрель',  'Май',    'Июнь',
  'Июль',   'Август',  'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

export const weekDayNames = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ];

export const hourOptions = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ]
    .map(el => ({key: withLeadingNull(el), value: withLeadingNull(el)}));
export const minuteOptions = [ 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55 ]
    .map(el => ({key: withLeadingNull(el), value: withLeadingNull(el)}));
