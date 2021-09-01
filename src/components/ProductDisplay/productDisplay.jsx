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
            console.log(data)
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    const baseURL = 'http://127.0.0.1:8000'

    return (
        <div className="product-display-container">
            <div className="product-info">
                <div className="product-title">
                    <h1>{product.name}</h1>
                </div>
                <div className="product-description">
                    <h4>{product.description}</h4>
                </div>
                <div className="product-image">
                    <img id="product-imgage" src={baseURL + product.image} alt="product" style={{height: "350px"}}/>
                </div>
                <div className="product-price">
                    <p>${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay;