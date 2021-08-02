import React, {Component} from 'react';
import axios from 'axios';
import './productForm.css';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            product_image: null,
            price: 0
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImageChange = e => {
        this.setState({
            product_image: e.target.files[0]
        }, () => {console.log('PRODUCT IMAGE', this.state.product_image)})
    }

    handleSubmit = e => {
        // Form data 1st param must match the name of model field in django
        e.preventDefault();
        let fd = new FormData()
        fd.append('name', this.state.name)
        fd.append('description', this.state.description)
        fd.append('image', this.state.product_image, this.state.product_image.name)
        fd.append('price', this.state.price)
        this.productSubmittal(fd)
    }

    productSubmittal = async(fd) => {
        console.log('PRODUCT FORM DATA AT API', fd)
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}`}, 'content-type': 'multipart/form-data'};
            let {data} = await axios.post(`http://127.0.0.1:8000/api/digital_products_creator/`, fd, config);
            console.log('Product Data', data)
        }
        catch(error) {
            alert(`Whoops! ${error} Looks like we're having some technical difficulties. Try again later`)
        }
    }

    render() {
        return (
            <div className="productForm-container my-5">
                <form onSubmit={this.handleSubmit}>
                    <h2>Add a Product</h2>
                    <div className="form-group my-4">
                        <label htmlFor="name">Name of Product:</label>
                        <input className="form-control" type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                        <label htmlFor="description">Description:</label>
                        <textarea className="form-control" type="text" name="description" onChange={this.handleChange} value={this.state.description}/>
                        <label htmlFor="image">Product Image:</label>
                        <input className="form-control" type="file" accept="image/*" name="product_image" onChange={this.handleImageChange}/>
                        <label htmlFor="price">Price:</label>
                        <input className="form-control" type="text" name="price" onChange={this.handleChange} value={this.state.price}/>
                        <br/>
                        <button className="confirmReg">Confirm</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ProductForm;