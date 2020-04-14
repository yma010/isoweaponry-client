import * as APIProductUtil from "../util/products_api_util.js";

export const RECEIVE_ALL_RENTALS = "RECEIVE_ALL_RENTALS";
export const RECEIVE_RENTAL = "RECEIVE_RENTAL";

export const receiveAllRentals = (rentals) => ({
    type: RECEIVE_ALL_RENTALS,
    rentals
});

export const receiveRental = (payload) => {
    const {
        data
    } = payload;

    const rental = data.rental;
  
    return {
        type: RECEIVE_RENTAL,
        rental,
        status: 200
    }
};

export const fetchRentals = () => dispatch => {
    APIProductUtil.fetchProducts(searchParams)
        .then(rentals => dispatch(receiveAllRentals(rentals)))
};

export const fetchRental = rental => {
    return dispatch => {
        APIProductUtil.fetchRental(rental)
            .then(data => dispatch(receiveRental(data)));
    };
}

export const createProduct = (data) => dispatch => {
    return APIProductUtil.createProduct(data)
        .then(product => dispatch(receiveProduct(product)))
        .catch(err => console.log(err))
};

export const updateProduct = (data) => dispatch => {
    return APIProductUtil.updateProduct(data)
        .then(product => dispatch(receiveProduct(product)))
        .catch(err => console.log(err))
};