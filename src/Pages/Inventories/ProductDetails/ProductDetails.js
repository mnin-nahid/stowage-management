import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDrtail from '../../../hooks/useProductDrtail';
import ManageQuantity from '../ManageQuantity/ManageQuantity';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useProductDrtail(productId);
    return (
        <div>
            <div className='w-50 mx-auto'>
                <img src={product?.img} alt="" />
                <h5>{product?.name}</h5>
                <p>Price: {product?.price}</p>
                <p>{product?.description}</p>
                <p>Quantity : {product?.quantity}</p>
                <p>Supplier: {product?.supplier}</p>
            </div>
            <ManageQuantity></ManageQuantity>
        </div>
    );
};

export default ProductDetails;