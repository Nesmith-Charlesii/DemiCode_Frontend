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
            price: null
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImageChange = e => {
        this.setState({
            upload: e.target.files[0]
        }, () => {console.log('PRODUCT IMAGE', this.state.upload)})
    }

    handleSubmit = e => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('upload', this.state.upload, this.state.upload.name)
        formData.append('title', this.state.title)
        formData.append('text', this.state.text)
        console.log('UPLOAD STATE NAME', this.state.upload.name)
        this.snippetSubmittal(formData)
    }

    productSubmittal = async(formData) => {
        console.log('PRODUCT FORM DATA AT API', formData)
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}`}, 'content-type': 'multipart/form-data'};
            let {data} = await axios.post(`http://127.0.0.1:8000/api/code_snippets_creator/`, formData, config);
            console.log('SNIPPET DATA', data)
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
                        <input className="form-control" type="file" name="image" onChange={this.handleChange} value={this.state.product_image}/>
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