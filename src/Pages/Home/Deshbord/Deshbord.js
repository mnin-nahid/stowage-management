import React from 'react';
import useProducts from '../../../hooks/useProducts';

const Deshbord = () => {
    const [product] = useProducts();
    return (
        <div className='container d-flex justify-content-around my-4'>
            <div>
                <h3>Total Product</h3>
                <h4>{product.length}</h4>
            </div>
            <div>
                <h3>Total Selse</h3>
                <h4>{product.length}</h4>
            </div>
        </div>
    );
};

export default Deshbord;