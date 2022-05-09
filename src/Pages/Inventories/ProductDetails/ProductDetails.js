import axios from 'axios';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useProductDrtail from '../../../hooks/useProductDrtail';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useProductDrtail(productId);

    const handelQuantityChange = async e => {
        e.preventDefault();
        const { quantity, ...rest } = product;
        const lastQuantity = (parseInt(quantity) + parseInt(e.target.quantity.value)) + ' ';
        const newQuantity = { quantity: lastQuantity, ...rest };
        setProduct(newQuantity);

        try {
            const res = await axios.put(`http://localhost:5000/product/${productId}`, { quantity: lastQuantity });
        }
        catch (error) {
            console.log(error.message)
        }
    };

    const handleDeliver = async e => {
        const { quantity, ...rest } = product;
        const lastQuantity = (parseInt(quantity) - 1) + ' ';
        const newQuantity = { quantity: lastQuantity, ...rest };
        setProduct(newQuantity);
        try {
            const res = await axios.put(`http://localhost:5000/product/${productId}`, { quantity: lastQuantity });
        }
        catch (error) {
            console.log(error.message)
        }
    };

    return (
        <div>
            <div className='text-center'>
                <Link className='text-center btn btn-info text-white' to="/manageinventories">Manage Inventories</Link>
            </div>
            <div className='w-50 mx-auto justify-content-center mt-4'>
                <div>
                    <img className='mx-auto d-block' src={product?.img} alt="" />
                </div>
                <h5>{product?.name}</h5>
                <p>Price: {product?.price}</p>
                <p>{product?.description}</p>
                <p>Quantity : {product?.quantity}</p>
                <p>Supplier: {product?.supplier}</p>
            </div>
            <div className='d-flex justify-content-center my-5'>
                <div className='me-5'>
                    <form onSubmit={handelQuantityChange} className='text-center m-2 p-3 border'>
                        <input className='form-control' type="number" name="quantity" id="" />

                        <input className='mt-2 btn btn-secondary' type="submit" value="Update Quantity" />
                    </form>
                </div>
                <div className='m-2 text-center p-3 border'>
                    <input onClick={handleDeliver} className='btn btn-success' type="submit" value="Delivered Product" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;