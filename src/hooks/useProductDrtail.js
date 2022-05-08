import { useEffect, useState } from "react";

const useProductDrtail = productId =>{
    const [product, setProduct] = useState({});

    useEffect( ()=>{
        fetch(`http://localhost:5000/product/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[productId]);
    return [product, setProduct];
}

export default useProductDrtail;