import { useEffect, useState } from "react";

const useProductDrtail = productId =>{
    const [product, setProduct] = useState({});

    useEffect( ()=>{
        fetch(`https://mysterious-beach-33208.herokuapp.com/product/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[productId]);
    return [product, setProduct];
}

export default useProductDrtail;