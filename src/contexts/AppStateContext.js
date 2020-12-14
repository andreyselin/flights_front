import React, {useMemo, useReducer} from 'react';
import {authEvents, authStates, dataEvents, dataStates} from "../const";
import {apiMethods} from "../api";

const storedToken = localStorage.getItem('authorization');

const initialState = {
  dataState: dataStates.loading,
  authState: storedToken
    ? authStates.authorized
    : authStates.unAuthorized
};

export const AppStateContextStore = React.createContext(initialState);
const { Provider } = AppStateContextStore;

const reducer = (state, action) => {
  console.log('reducer2:', action);

  if (action.type === dataEvents.loadingStarted) {
    return {
      ...state,
      dataState: dataStates.loading
    };
  } else if (action.type === dataEvents.authFailed) {
    return {
      ...state,
      authState: authStates.unAuthorized,
      dataState: dataStates.fail
    }
  } else if (action.type === dataEvents.loadingFinished) {
    return {
      ...state,
      dataState: dataStates.success
    }
  } else if (action.type === authEvents.loggedIn ) {
    return {
      ...state,
      authState: authStates.authorized
    }
  } else if (action.type === authEvents.loggedOut ) {
    return {
      ...state,
      authState: authStates.unAuthorized
    }
  } else {
    return state;
  }
};

export const AppStateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const api = useMemo(() => apiMethods(dispatch), []);

  return <Provider value={{ state, dispatch, api }}>{ children }</Provider>;
};

