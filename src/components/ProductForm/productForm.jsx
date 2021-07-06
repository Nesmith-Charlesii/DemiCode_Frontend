import React from 'react';
import CustomForm from '../CustomHook/customForm';
import axios from 'axios';
import './productForm.css';

const ProductForm = (props) => {

    const Submittal = () => {
        const product = {
            //Keys must match that of the model from django exactly!
            name: inputs.name,
            description: inputs.description,
            image: inputs.image,
            price: inputs.price,
        }
        console.log('Product Dict', product)
        productSubmittal(product)
    }

    const {handleChange, handleSubmit, inputs} = CustomForm(Submittal)

    const productSubmittal = async(product) => {
        console.log('product submit token', localStorage.getItem('token'))
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}` }};
            let {data} = await axios.post(`http://127.0.0.1:8000/api/digital_products/`, product, config);
            console.log('PRODUCT DATA', data)
        }
        catch(error) {
            alert(`Whoops! ${error} Looks like we're having some technical difficulties. Try again later`)
        }
    }


    return (
        <div className="productForm-container my-5">
            <form onSubmit={handleSubmit}>
                <h2>Add a Product</h2>
                <div className="form-group my-4">
                    <label htmlFor="name">Name of Product:</label>
                    <input className="form-control" type="text" name="name" onChange={handleChange} value={inputs.name}/>
                    <label htmlFor="description">Description:</label>
                    <textarea className="form-control" type="text" name="description" onChange={handleChange} value={inputs.description}/>
                    <label htmlFor="image">Product Image:</label>
                    <input className="form-control" type="text" name="image" onChange={handleChange} value={inputs.image}/>
                    <label htmlFor="price">Price:</label>
                    <input className="form-control" type="text" name="price" onChange={handleChange} value={inputs.price}/>
                    <br/>
                    <button className="confirmReg">Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default ProductForm;