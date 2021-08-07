import React from 'react'; 
import './productGallery.css';

const ProductGallery = (props) => {

    return(
        <div className="product-gallery">
            <div className="product-content">
                    {props.products.map((product) => {
                    return (
                        <div className="product-card-content" key={product.id}>
                            <div className="card-title">
                                <h4>{product.name}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductGallery;