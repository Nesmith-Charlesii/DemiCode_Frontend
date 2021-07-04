import React from 'react'
import './home.css';

const Home = (props) => {
    return (
        <div className="brief-container">
            <div className="article-wrapper">
                <h2>Most Read Articles</h2>
                <div className="article-content">
                    {props.articleHeaders.map((article) => {
                    return (
                        <>
                        <div className="card-content" id={article.id}>
                            <h4>{article.title}</h4>
                        </div>
                        </>
                    )
                })}
                </div>
                <div className="article-content">

                </div>
            </div>
            
        </div>
    )
}

export default Home