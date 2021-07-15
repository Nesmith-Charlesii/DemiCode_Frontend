import React from 'react';
import CustomForm from '../CustomHook/customForm';
import '../fontawesome/css/all.min.css';
import axios from 'axios';
import './blogForm.css';

const BlogForm = (props) => {

    const Submittal = () => {
        const blog = {
            //Keys must match that of the model from django exactly!
            title: inputs.title,
            content: inputs.content,
        }
        console.log('Blog Dict', blog)
        blogSubmittal(blog)
    }

    const blogSubmittal = async(blog) => {
        console.log('Blog submit token', localStorage.getItem('token'))
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}` }};
            let {data} = await axios.post(`http://127.0.0.1:8000/api/blog_content_creator/`, blog, config);
            console.log('BLOG DATA', data)
        }
        catch(error) {
            alert(`Whoops! ${error} Looks like we're having some technical difficulties. Try again later`)
        }
    }

    const {handleChange, handleSubmit, inputs} = CustomForm(Submittal)

    return (
        <div className="blogForm-container my-5">
            <form onSubmit={handleSubmit}>
                <h2>Share Your Knowledge</h2>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input className="form-control" type="text" name="title" onChange={handleChange} value={inputs.title}/>
                    <div className="text-tools">
                        <i class="fas fa-bold"></i>
                        <i class="fas fa-italic"></i>
                        <i class="fas fa-align-left"></i>
                        <i class="fas fa-align-center"></i>
                        <i class="fas fa-align-right"></i>
                        <i class="fas fa-underline"></i>
                        <button className="btn btn-secondary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Uppercase text">Upper Case</button>
                        <button className="btn btn-secondary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Lowercase text">Lower Case</button>
                        <button className="btn btn-secondary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Capitalize text">Capitalize</button>
                        <button className="btn btn-secondary btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Clear text">Clear Text</button>
                    </div>
                    <label htmlFor="content">Content:</label>
                    <textarea className="form-control" type="text" name="content" onChange={handleChange} value={inputs.content}/>
                    <br/>
                    <button className="confirmReg">Sign Up!</button>
                </div>
            </form>
            <div className="article-display">
                
            </div>
        </div>
    )
}

export default BlogForm;