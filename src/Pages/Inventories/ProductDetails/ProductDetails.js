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
        console.log(lastQuantity);

        try{
            const res = await axios.put(`http://localhost:5000/product/${productId}`, {quantity :lastQuantity});
        }
        catch(error){
            console.log(error.message)
        }
    };

    const handleDeliver = async e =>{
        const { quantity, ...rest } = product;
        const lastQuantity = (parseInt(quantity) - 1) + ' ';
        const newQuantity = { quantity: lastQuantity, ...rest };
        setProduct(newQuantity);
        try{
            const res = await axios.put(`http://localhost:5000/product/${productId}`, {quantity :lastQuantity});
        }
        catch(error){
            console.log(error.message)
        }
    };

    return (
        <div>
            <Nav.Link className='w-25 mx-auto text-center btn btn-info text-white my-3' as={Link} to="/manageinventories">Manage Inventories</Nav.Link>

            <div className='w-50 mx-auto'>
                <img src={product?.img} alt="" />
                <h5>{product?.name}</h5>
                <p>Price: {product?.price}</p>
                <p>{product?.description}</p>
                <p>Quantity : {product?.quantity}</p>
                <p>Supplier: {product?.supplier}</p>
            </div>
            <div className='d-flex justify-content-center my-5'>
                <div className='me-5'>
                    <form onSubmit={handelQuantityChange}>
                        <input type="number" name="quantity" id="" />
                        <br />
                        <input className='mt-2' type="submit" value="Update Quantity" />
                    </form>
                </div>
                <div className='ms-5'>
                    <input onClick={handleDeliver} className='mt-2' type="submit" value="Delivered Product" />
                    {/* <button className='btn btn-dark'>Deliver</button> */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;