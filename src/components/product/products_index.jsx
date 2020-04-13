import React from 'react';
import { ProductIndexItem } from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchProducts()
    }

    render(){
        const { products } = this.props;
        const productIndexItems =  products.map( product =>(
            <ProductIndexItem key={product.id} product={product} />
        ))

        return(
            <ul className='product-index-list'>
                {/* {productIndexItems} */}
            </ul>
        )
    }

}

export default ProductIndex;