import React from 'react';
import { Link } from 'react-router-dom';

export const ProductIndexItem = ({ product }) => (
    <li className='product-index-item'>
        <Link className='link' to={`/${product.category}/${product.id}`}>
            <div className='details'>
                <div className='product-image-container'>
                    <img src={product.images[0]} alt={product.name}/>
                </div>
                <div className='description'>
                </div>
            </div>
        </Link>
    </li>
)

