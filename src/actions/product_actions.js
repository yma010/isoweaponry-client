import * as APIProductUtil from "../util/products_api_util.js";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const receiveAllProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
});

export const receiveProduct = (payload) => {
    const {
        data
    } = payload;

    const product = data.product;
  
    return {
        type: RECEIVE_PRODUCT,
        product,
        status: 200
    }
};

export const fetchProducts = (searchParams = "") => dispatch => {
    APIProductUtil.fetchProducts(searchParams)
        .then(products => dispatch(receiveAllProducts(products)))
};

export const fetchProduct = product => {
    return dispatch => {
        APIProductUtil.fetchPet(product)
            .then(data => dispatch(receiveProduct(data)));
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