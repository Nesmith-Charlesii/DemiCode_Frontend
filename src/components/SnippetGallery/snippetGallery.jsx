import React from 'react'; 
import './snippetGallery.css';

const SnippetGallery = (props) => {

    return(
        <div className="snippet-gallery">
            <div className="snippet-content">
                    {props.snippets.map((snippet) => {
                    return (
                        <div className="snippet-card-content" key={snippet.id}>
                            <div className="card-title">
                                <h4>{snippet.title}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SnippetGallery;