import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import './Items.css'

const Items = () => {
    const [products] = useProducts();
    const homePageProducts = products.slice(0, 6);

    const navigate = useNavigate();

    const handleProductDetails = id =>{
        navigate(`/product/${id}`);
    }
    return (
        <div>
            <div className='items-container container'>
                {
                    homePageProducts.map(product => <div key={product._id}>
                        <img src={product.img} alt="" />
                        <h5>{product.name}</h5>
                        <p>{product.price}</p>
                        <button onClick={()=> handleProductDetails(product._id)} className='btn btn-dark'>Update</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Items;