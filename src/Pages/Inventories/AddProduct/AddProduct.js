import React from 'react';
import { Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {


        data.email = user.email;

        //send data to the server
        const url = 'http://localhost:5000/product';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };

    return (
        <div className='w-50 mx-auto my-5'>
            <h3 className='text-center'>Add a new Product</h3>
            <div className='text-center'>
                <Link className='btn btn-info text-white' to="/manageinventories">All Products</Link>
            </div>
            <form className='d-flex flex-column mx-auto my-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 30 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 30 })} />
                <input className='mb-2' placeholder='Image URL' type="text" {...register("img")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                {errors.exampleRequired && <span>This field is required</span>}
                <div className='text-center'>
                    <input className='btn btn-success' type="submit" value="Add Service" />
                </div>
            </form>

        </div>
    );
};

export default AddProduct;