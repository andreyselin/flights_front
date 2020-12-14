import * as axios from "axios";
import {authStates, dataEvents} from "../const";
import {env} from "../env";

const withDispatch = (dispatch, fn) => {
  return async function() {
    try {
      dispatch({type: dataEvents.loadingStarted});
      const result = await fn(...arguments);
      dispatch({type: dataEvents.loaded});

      return result.data;
    } catch (e) {
      if (!e.response) {
        dispatch({type: dataEvents.notResponded});
        return {
          status: 10006,
          key: 'notResponding',
          data: {}
        };
      } else {
        if (e.response.status === 401) {
          dispatch({
            type: dataEvents.authFailed,
            authState: authStates.unAuthorized
          });
          return e.response.data;
        }
      }
    }
  };
};


class ApiService {

  methods = {};

  prepare(methods, dispatch) {
    this.methods = Object.entries(methods).reduce((acc, [key, value]) => {
      acc[key] = withDispatch(dispatch, value);
      return acc;
    }, {});
    return this.methods;
  }

  getHeaders = () => {
    const authorization = localStorage.getItem('authorization');
    return authorization ? { authorization } : {};
  };

  doGet  = (path, params) => axios.get (`${env.api.address}${path}`, { params, headers: this.getHeaders() });
  doPost = (path, params) => axios.post(`${env.api.address}${path}`, params, { headers: this.getHeaders() });

}

export const apiService = new ApiService();
