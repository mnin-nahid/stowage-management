import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const email = user.email;
            const url = `https://mysterious-beach-33208.herokuapp.com/myitems/${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setProduct(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/signin')
                }
            }
        }
        getProduct();
    }, [user]);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://mysterious-beach-33208.herokuapp.com/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = product.filter(p => p._id !== id);
                    setProduct(remaining);
                })
        }
    };
    return (
        <div className='container'>
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
                        product.map(p => <tr className='text-center justify-content-center'>
                            <td>{p._id}</td>
                            <td> <img className='border' src={p.img} alt="" /> </td>
                            <td className='border'>{p.name}</td>
                            <td className='border'>{p.quantity}</td>
                            <td> <button onClick={() => handleDelete(p._id)} className='btn btn-danger rounded mx-2 text-decoration-none'>Delete</button> </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyItems;