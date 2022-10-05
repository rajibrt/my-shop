import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const products = useLoaderData();
    return (
        <div className='products-page'>
            <h2>Weh have lot of products : {products.length} </h2>
            <div className='products'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;