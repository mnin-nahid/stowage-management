import React from 'react';
import './ManageInventories.css';
import { Nav, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';


const ManageInventories = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://mysterious-beach-33208.herokuapp.com/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    };
    return (
        <div className='container'>
            <h3 className='text-center my-3'>All items is hear</h3>
            <div className='text-center'>
                <Link className='text-center btn btn-info text-white my-4' to="/addnewitem">Add new item</Link>
            </div>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Images</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr className='text-center justify-content-center'>
                            <td>{product._id}</td>
                            <td> <img className='border' src={product.img} alt="" /> </td>
                            <td className='border'>{product.name}</td>
                            <td className='border'>{product.quantity}</td>
                            <td> <button onClick={() => handleDelete(product._id)} className='btn btn-danger rounded mx-2 text-decoration-none'>Delete</button> </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div >
    );
};

export default ManageInventories;