import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { thumbnail, title, price } = product;
    const details = () => {

    }
    return (
        <div className='card'>
            <div className="container content">
                <img src={product.thumbnail} alt="producImage" />
                <div className="info content-overlay">
                    <h4>{title} </h4>
                    <h3>$ {price} </h3>
                    {/* <button onClick={details}><Link>Buy Now</Link></button> */}
                    {/* <p className='buy-now-btn overlay'><Link>Buy Now</Link></p> */}
                </div>
            </div>
            <div className="overlay">
                <p className='buy-now-btn-o'><Link>Buy Now</Link></p>
            </div>
        </div>
    );
};

export default Product;