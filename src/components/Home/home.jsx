import React from 'react'
import './home.css';

const Home = (props) => {
    return (
        <div className="brief-container">
            <div className="content-wrapper">
                <h2>Most Read Articles</h2>
                <div className="article-content my-4">
                    {props.articles.map((article) => {
                    return (
                        <div className="article-card-content" key={article.id}>
                            <div className="card-title">
                                <h4>{article.title}</h4>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="content-wrapper">
                <h2>Most Watched Videos</h2>
                <div className="video-content my-4">
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
            <div className="content-wrapper">
                <h2>Snippets</h2>
                <div className="snippet-content my-4">
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
            <div className="content-wrapper">
                <h2>Popular Products</h2>
                <div className="product-content my-4">
                    {props.products.map((product) => {
                    return (
                        <div className="product-card-content" key={product.id}>
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