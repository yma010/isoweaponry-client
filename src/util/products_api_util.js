import axios from "axios";

export const fetchRentals = () => axios.get(`/api/rentals/index`)
  .then(function (response) {
    return response.data;
  });

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