import React from 'react'
import './home.css';

const Home = (props) => {
    return (
        <div className="brief-container">
            <h2>Recently uploaded content</h2>
            <div className="content-wrapper">
                
                <div className="article-content-home my-4">
                    {props.articles.map((article) => {
                    return (
                        <div className="article-card-content-home" key={article.id} id="article-card-content">
                            <div className="card-title">
                                <h4>{article.title}</h4>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="content-wrapper">
                
                <div className="video-content-home my-4">
                    {props.videos.map((video) => {
                        return (
                        <div className="video-card-content-home" key={video.id}>
                            <video controls autoPlay loop muted>
                                <source src={props.baseURL + video.video} type="video/mp4"></source>
                            </video>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="content-wrapper">
                
                <div className="snippet-content-home my-4">
                    {props.snippets.map((snippet) => {
                    return (
                        <div className="snippet-card-content-home" key={snippet.id}>
                            <div className="card-title">
                                <h4>{snippet.title}</h4>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="content-wrapper">
                
                <div className="product-content-home my-4">
                    {props.products.map((product) => {
                    return (
                        <div className="product-card-content-home" key={product.id}>
                            <div className="card-title">
                                <h4>{product.name}</h4>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Home