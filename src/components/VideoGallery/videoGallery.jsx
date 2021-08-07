import React from 'react'; 
import './videoGallery.css';

const VideoGallery = (props) => {

    return(
        <div className="video-gallery">
            <div className="video-content">
                    {props.videos.map((video) => {
                    return (
                        <div className="video-card-content" key={video.id}>
                            <video controls autoPlay loop muted>
                                <source src={props.baseURL + video.video} type="video/mp4"></source>
                            </video>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VideoGallery;