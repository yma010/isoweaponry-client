import { connect } from "react-redux";
import { fetchProducts, fetchProduct } from "../../actions/product_actions";
import ProductsIndex from "./products_index";
import { withRouter } from "react-router-dom";

const msp = state => ({
  products: Object.values(state.entities.pets)
});

const mdp = (dispatch, { location: { search } }) => {
  return {
    fetchProducts: () => dispatch(fetchProducts(search.slice(1))),
    fetchProduct: id => dispatch(fetchProduct(id))
}};

export default withRouter(connect(
  msp, 
  mdp
)(ProductsIndex));