import React, {Component} from 'react';
import '../fontawesome/css/all.min.css';
import axios from 'axios';
import './blogForm.css';

class BlogForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            header_image: null,
            text: ""
        }
    }

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
            text: e.target.value
        })
    }

    handleImageChange = e => {
        this.setState({
            upload: e.target.files[0]
        }, () => {console.log('HEADER IMAGE STATE', this.state.header_image)})
    }

    handleSubmit = e => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('header_image', this.state.header_image, this.state.header_image.name)
        formData.append('title', this.state.title)
        formData.append('content', this.state.content)
        console.log('UPLOAD STATE NAME', this.state.upload.name)
        this.blogSubmittal(formData)
    }

    blogSubmittal = async(formData) => {
        console.log('BLOG FORM DATA AT API', formData)
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}`}, 'content-type': 'multipart/form-data'};
            let {data} = await axios.post(`http://127.0.0.1:8000/api/blog_content_creator/`, formData, config);
            console.log('BLOG DATA', data)
        }
        catch(error) {
            alert(`Whoops! ${error} Looks like we're having some technical difficulties. Try again later`)
        }
    }
    render() {
        return (
            <div className="blogForm-container my-5">
                <form onSubmit={this.handleSubmit}>
                    <h2>Share Your Knowledge</h2>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input className="form-control" type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                        <div className="text-tools">
                            <i className="fas fa-bold"></i>
                            <i className="fas fa-italic"></i>
                            <i className="fas fa-align-left"></i>
                            <i className="fas fa-align-center"></i>
                            <i className="fas fa-align-right"></i>
                            <i className="fas fa-underline"></i>
                            <button className="btn btn-secondary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Uppercase text">Upper Case</button>
                            <button className="btn btn-secondary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Lowercase text">Lower Case</button>
                            <button className="btn btn-secondary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Capitalize text">Capitalize</button>
                            <button className="btn btn-secondary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Clear text">Clear Text</button>
                        </div>
                        <label htmlFor="content">Content:</label>
                        <textarea className="form-control" type="text" name="content" onChange={this.handleChange} value={this.state.content}/>
                        <br/>
                        <button className="confirmReg">Submit!</button>
                    </div>
                </form>
                <div className="article-display">
                    <div className="header-image">

                    </div>
                    <div className="display-text">
                        <p>{this.state.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogForm;