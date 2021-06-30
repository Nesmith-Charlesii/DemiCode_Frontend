import React from 'react';
import CustomForm from '../CustomHook/customForm';
//import axios from 'axios';
import './blogForm.css';

const BlogForm = (props) => {

    const Submittal = () => {
        const blog = {
            //Keys must match that of the model from django exactly!
            title: inputs.title,
            content: inputs.content,
        }
        console.log('Blog Dict', blog)
        props.blogSubmittal(blog)
    }

    const {handleChange, handleSubmit, inputs} = CustomForm(Submittal)

    return (
        <div className="blogForm-container my-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input className="form-control" type="text" name="title" onChange={handleChange} value={inputs.title}/>
                    <label htmlFor="content">Content:</label>
                    <textarea className="form-control" type="text" name="content" onChange={handleChange} value={inputs.content}/>
                    <br/>
                    <button className="confirmReg">Sign Up!</button>
                </div>
            </form>
        </div>
    )
}

export default BlogForm;