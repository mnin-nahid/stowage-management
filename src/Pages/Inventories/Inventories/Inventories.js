import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import './Inventories.css'

const Inventories = () => {
    const [products] = useProducts();
    const homePageProducts = products.slice(0, 6);

    const navigate = useNavigate();

    const handleProductDetails = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div>
            <h2 className='text-center mt-5 font-weight-normal'>Inventories</h2>
            <div className='items-container container'>
                {
                    homePageProducts.map(product => <div className='text-center' key={product._id}>
                        <img src={product.img} alt="" />
                        <h5>{product.name}</h5>
                        <p>{product.price}</p>
                        <button onClick={() => handleProductDetails(product._id)} className='btn btn-dark'>Update</button>
                    </div>)
                }
            </div>
            <div className='text-center'>
                <Link to="/manageinventories" className='btn btn-info mx-auto'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventories;