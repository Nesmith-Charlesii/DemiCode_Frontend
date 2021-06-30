import React from 'react';
import CustomForm from '../CustomHook/customForm';
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

    const {handleChange, handleSubmit, inputs} = CustomForm(Submittal)

    const blogSubmittal = async(blog) => {
        console.log('Blog submit token', localStorage.getItem('token'))
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}` }};
            let {data} = await axios.post(`http://127.0.0.1:8000/api/blog_content/`, blog, config);
            console.log('BLOG DATA', data)
        }
        catch(error) {
            alert(`Whoops! ${error} Looks like we're having some technical difficulties. Try again later`)
        }
    }


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