import React from 'react';
import CustomForm from '../CustomHook/customForm';
import axios from 'axios';
import './videoForm.css';

const VideoForm = (props) => {

    const Submittal = () => {
        const video = {
            //Keys must match that of the model from django exactly!
            title: inputs.title,
            video: inputs.video
        }
        console.log('Video Dict', video)
        videoSubmittal(video)
    }

    const {handleChange, handleSubmit, inputs} = CustomForm(Submittal)

    const videoSubmittal = async(video) => {
        console.log('video submit token', localStorage.getItem('token'))
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}` }};
            let {data} = await axios.post(`http://127.0.0.1:8000/api/videos/`, video, config);
            console.log('VIDEO DATA', data)
        }
        catch(error) {
            alert(`Whoops! ${error} Looks like we're having some technical difficulties. Try again later`)
        }
    }


    return (
        <div className="videoForm-container my-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input className="form-control" type="text" name="title" onChange={handleChange} value={inputs.title}/>
                    <label htmlFor="video">Video Upload:</label>
                    <input className="form-control" type="text" name="video" onChange={handleChange} value={inputs.video}/>
                    <br/>
                    <button className="confirmReg">Upload</button>
                </div>
            </form>
        </div>
    )
}

export default VideoForm;