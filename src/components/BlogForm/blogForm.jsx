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
            text: "",
        }
    }

    bold = () => {
        document.execCommand('bold');
    }

    italic = () => {
        document.execCommand('italic');
    }

    leftAlign = () => {
        console.log("left align")
        document.execCommand('justifyLeft');
    }

    centerAlign = () => {
        console.log("center align")
        document.execCommand('justifyCenter');
    }

    rightAlign = () => {
        console.log("right align")
        document.execCommand('justifyRight');
    }

    underline = () => {
        document.execCommand('underline');
    }

    bullet = () => {
        document.execCommand('insertUnorderedList');
    }

    numbered = () => {
        document.execCommand('insertOrderedList');
    }

    clearText = () => {
        document.execCommand('delete');
    }

    handleChange = e => {
        // console.log(e.target.innerText)
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log("title", this.state.title, ": content", this.state.content))
    }

    handleImageChange = e => {
        this.setState({
            upload: e.target.files[0]
        }, () => {console.log('HEADER IMAGE STATE', this.state.header_image)})
    }

    handleSubmit = e => {
        e.preventDefault();
        let hiddenInput = document.getElementById('hidden-input') 
        hiddenInput = document.getElementById('content-box').value
        console.log(hiddenInput)
        let formData = new FormData()
        formData.append('title', this.state.title)
        formData.append('content', this.state.content)
        // formData.append('header_image', this.state.header_image) because there is no header image input
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
                            <button data-command="bold" type="button" data-toggle="tooltip" data-placement="top" onClick={this.bold}>
                                <i className="fas fa-bold"></i>
                            </button>
                            <button data-command="italic" type="button" data-toggle="tooltip" data-placement="top" onClick={this.italic}>
                                <i className="fas fa-italic"></i>
                            </button>
                            <button data-command="justifyLeft" type="button" data-toggle="tooltip" data-placement="top" onClick={this.leftAlign}>
                                <i className="fas fa-align-left"></i>
                            </button>
                            <button data-command="justifyCenter" type="button" data-toggle="tooltip" data-placement="top" onClick={this.centerAlign}>
                                <i className="fas fa-align-center"></i>
                            </button>
                            <button data-command="justifyRight" type="button" data-toggle="tooltip" data-placement="top" onClick={this.rightAlign}>
                                <i className="fas fa-align-right"></i>
                            </button>
                            <button data-command="underline" type="button" data-toggle="tooltip" data-placement="top" onClick={this.underline}>
                                <i className="fas fa-underline"></i>
                            </button>
                            <button className="btn btn-secondary btn-sm" data-command="delete" type="button" data-toggle="tooltip" data-placement="top" title="Clear text" onClick={this.clearText}>
                                Clear Text
                            </button>
                        </div>
                        <label htmlFor="content">Content:</label>
                        <div id="content-box" className="content-box form-control" type="text" name="content" onChange={this.handleChange} value={this.state.content} contentEditable="true">
            
                        </div>
                        <textarea id="hidden-input" style={{display: "none"}}>

                        </textarea>
                        <br/>
                        <button className="confirmReg">Submit!</button>
                    </div>
                </form>
                {/* <div className="article-display">
                    <div className="header-image">

                    </div>
                    <textarea className="display-text" defaultValue={this.state.text} contentEditable="true">
                        
                    </textarea>
                </div> */}
            </div>
        )
    }
}

export default BlogForm;