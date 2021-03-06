import React from 'react'
import './home.css';

const Home = (props) => {
    return (
        <div className="brief-container">
            <h2>Recently uploaded content</h2>
            <div className="content-wrapper-home">
                <h3>Articles</h3>
                <hr/>
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
            <div className="content-wrapper-home">
                <h3>Videos</h3>
                <hr/>
                <div className="video-content-home my-4">
                    {props.videos.map((video) => {
                        return (
                        <div className="video-card-content-home" key={video.id} id="video-card-content">
                            <video controls autoPlay loop muted>
                                <source src={props.baseURL + video.video} type="video/mp4"></source>
                            </video>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="content-wrapper-home">
                <h3>Snippets</h3>
                <hr/>
                <div className="snippet-content-home my-4">
                    {props.snippets.map((snippet) => {
                    return (
                        <div className="snippet-card-content-home" key={snippet.id} id="snippet-card-content">
                            <div className="card-title">
                                <h4>{snippet.title}</h4>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="content-wrapper-home">
                <h3>Products</h3>
                <hr/>
                <div className="product-content-home my-4">
                    {props.products.map((product) => {
                    return (
                        <div className="product-card-content-home" key={product.id} id="product-card-content">
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