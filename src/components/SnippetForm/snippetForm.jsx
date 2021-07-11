import React, {Component} from 'react';
// import CustomForm from '../CustomHook/customForm';
import axios from 'axios';
import './snippetForm.css';

class SnippetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            upload: null
        }
    }

    // componentDidMount() {
    //     console.log('IMAGE STATE', this.state.upload)
    // }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImageChange = e => {
        this.setState({
            upload: e.target.files[0]
        }, () => {console.log('IMAGE STATE', this.state.upload)})
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

    snippetSubmittal = async(formData) => {
        console.log('FORM DATA AT API', formData)
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
            <div className="snippetForm-container my-4">
                <form onSubmit={this.handleSubmit}>
                    <h2>Create a Snippet</h2>
                    <div className="form-group my-4">
                        <label htmlFor="title">Title:</label>
                        <input className="form-control" type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                        <label htmlFor="text">Snippet Text:</label>
                        <textarea className="form-control" type="text" name="text" onChange={this.handleChange} value={this.state.text}/>
                        <label htmlFor="upload">Snippet Upload:</label>
                        <input className="form-control" type="file" accept="image/*" name="upload" onChange={this.handleImageChange} value={this.state.image}/>
                        <br/>
                        <button className="confirmReg">Confirm</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SnippetForm;