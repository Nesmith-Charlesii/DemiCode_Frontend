import React from 'react'
import './home.css';

const Home = (props) => {
    return (
        <div className="brief-container">
            <div className="article-header">
                <h4>Most Read Articles</h4>
            </div>
            <div className="article-brief">
                {props.articles.map((article) => {
                    return (
                        <p id={article.id}>{article.title}</p>
                    )
                })}
            </div>
            <div className="snippet-header">
                <h4>Most Searched Snippets</h4>
            </div>
            <div className="snippet-brief">
                {props.snippets.map((snippet) => {
                    return (
                        <p id={snippet.id}>{snippet.title}</p>
                    )
                })}
            </div>
            <div className="video-header">
                <h4>Most Watched Videos</h4>
            </div>
            <div className="video-brief">
                {props.videos.map((video) => {
                    return (
                        <p id={video.id}>{video.title}</p>
                    )
                })}
            </div>
            <div className="product-header">
                <h4>Popular Products</h4>
            </div>
            <div className="product-brief">
                {props.products.map((product) => {
                    return (
                        <p id={product.id}>{product.title}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Home