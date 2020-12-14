import { apiService } from './apiService';

const rawMethods = {
  createCertificate: async (params) => await apiService.doGet('/tmp', params)
  // createCertificate: async (params) => await apiService.doPost('/certificate/create', params)
};

export const apiMethods = (dispatch) => {
  // Can assign dispatch separately
  return apiService.prepare(rawMethods, dispatch);
};
