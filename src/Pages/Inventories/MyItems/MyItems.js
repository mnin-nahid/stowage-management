import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myitems/${user.email}`;
            const { data } = await axios.get(url)
            setProduct(data);
        }
        getProduct();
    }, [user]);
    return (
        <div>
            <h3>Hear is my items</h3>
            <p>Your Email is: {user.email}</p>
            <h4>Your Producrs: {product.length}</h4>
            {
                product.map(p => <li>{p.name}</li>)
            }
        </div>
    );
};

export default MyItems;