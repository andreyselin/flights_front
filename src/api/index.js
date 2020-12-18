import { apiService } from './apiService';

const rawMethods = {
  getFlight:    async params => await apiService.doPost('/flights/get',  params),
  editFlight:   async params => await apiService.doPost('/flights/edit', params),
  listFlights:  async params => await apiService.doPost('/flights/list', params),

  listPartners: async params => await apiService.doPost('/partners/list', params),
};

export const apiMethods = (dispatch) => {
  // Can assign dispatch separately
  return apiService.prepare(rawMethods, dispatch);
};
