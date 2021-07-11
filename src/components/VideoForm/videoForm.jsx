import React, {Component} from 'react';
import axios from 'axios';
import './videoForm.css';

class VideoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            video: null
        }
    }

    // componentDidMount() {
    //     console.log('IMAGE STATE', this.state.upload)
    // }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log('VIDEO TITLE STATE', this.state.title))
    }

    handleVideoChange = (e) => {
        this.setState({
            video: e.target.files[0]
        }, () => {console.log('Video STATE', this.state.video)})
    }

    handleSubmit = e => {
        e.preventDefault();
        let videoData = new FormData()
        videoData.append('video', this.state.video, this.state.video.name)
        videoData.append('title', this.state.title)
        this.videoSubmittal(videoData)
    }

    videoSubmittal = async(videoData) => {
        console.log('VIDEO DATA AT API', videoData)
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}`}, 'content-type': 'multipart/form-data'};
            let {data} = await axios.post(`http://127.0.0.1:8000/api/videos_creator/`, videoData, config);
            console.log('VIDEO DATA', data)
        }
        catch(error) {
            alert(`Whoops! ${error} Looks like we're having some technical difficulties. Try again later`)
        }
    }

    render() {
        return (
            <div className="videoForm-container my-5">
                <form onSubmit={this.handleSubmit}>
                    <h2>Upload a Video</h2>
                    <div className="form-group my-4">
                        <label htmlFor="title">Title:</label>
                        <input className="form-control" type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                        <label htmlFor="video">Upload Video:</label>
                        <input className="form-control" type="file" accept="video/*" name="video" onChange={this.handleVideoChange}/>
                        <br/>
                        <button className="confirmReg">Upload</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default VideoForm;