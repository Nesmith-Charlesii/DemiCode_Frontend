import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './productDisplay.css';

const ProductDisplay = (props) => {

    const [product, setProduct] = useState(null); 

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async() => {
        console.log('retrieving product')
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}`}};
            let {data} = await axios.get(`http://127.0.0.1:8000/api/digital_product/18`, config)
            setProduct(data)
            console.log(product);
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    return (
        <div className="product-display-container">
            <div className="product-title">
                <h1>Test</h1>
            </div>
        </div>
    )
}

export default ProductDisplay;