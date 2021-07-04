import React from 'react';
import CustomForm from '../CustomHook/customForm';
import axios from 'axios';
import './snippetForm.css';

const SnippetForm = (props) => {

    const Submittal = () => {
        const snippet = {
            //Keys must match that of the model from django exactly!
            title: inputs.title,
            text: inputs.text,
            upload: inputs.upload
        }
        console.log('Snippet Dict', snippet)
        snippetSubmittal(snippet)
    }

    const {handleChange, handleFileChange, handleSubmit, inputs} = CustomForm(Submittal)

    const snippetSubmittal = async(snippet) => {
        console.log('SNIPPET', snippet)
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}`}};
            let {data} = await axios.post(`http://127.0.0.1:8000/api/code_snippets_creator/`, snippet, config);
            console.log('SNIPPET DATA', data)
        }
        catch(error) {
            alert(`Whoops! ${error} Looks like we're having some technical difficulties. Try again later`)
        }
    }


    return (
        <div className="snippetForm-container my-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input className="form-control" type="text" name="title" onChange={handleChange} value={inputs.title}/>
                    <label htmlFor="text">Snippet Text:</label>
                    <textarea className="form-control" type="text" name="text" onChange={handleChange} value={inputs.text}/>
                    <label htmlFor="upload">Snippet Upload:</label>
                    <input className="form-control" type="file" accept="image/*" name="upload" onChange={handleFileChange} value={inputs.upload}/>
                    <br/>
                    <button className="confirmReg">Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default SnippetForm;