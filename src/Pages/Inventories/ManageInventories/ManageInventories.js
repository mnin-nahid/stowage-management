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
            const url = `http://localhost:5000/product/${id}`;
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
            <Nav.Link className='w-25 mx-auto text-center btn btn-info text-white my-4' as={Link} to="/addnewitem">Add new item</Nav.Link>

            <Table>
                {
                    products.map(product => <div>
                        <td> <img className='w-25 border' src={product.img} alt="" /> </td>
                        <td className='border'>{product.name}</td>
                        <td className='border'>{product.quantity}</td>
                        <td> <button onClick={() => handleDelete(product._id)} className='btn btn-danger rounded mx-2 text-decoration-none'>Delete</button> </td>
                    </div>)
                }
            </Table>
        </div >
    );
};

export default ManageInventories;