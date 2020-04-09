import axios from "axios";

export const fetchRental = (searchParams = "") => {
  let query = "";
  if (searchParams.length > 0) {
    query = `?${searchParams}`
  }
  return axios.get(`/api/rentals/index${query}`)
    .then(function(response) {
      return response.data;
    })
};

export const fetchRental = RentalId => {
  return axios.get(`/api/rentals/${RentalId}`)
    .then(function (response) {
      return response.data;
    })
};

export const createRental = data => {
  return axios.post(`/api/rentals/register`, data)
    .then(function(response) {
      return response;
    })
};

export const updateRental = data => {
  return axios.put(`/api/rentals/edit/${data._id}`, data)
    .then(function(response) {
      return response;
    })
}