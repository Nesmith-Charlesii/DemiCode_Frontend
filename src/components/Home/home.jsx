import React from 'react'
import './home.css';

const Home = (props) => {
    return (
        <div className="articles">
            <h1>Articles</h1>
            {props.articles.map((article) => {
                return (
                    <p>{article.title}</p>
                )
            })}
            <button onClick={props.allBlogs}>BUTTON</button>
        </div>
    )
}

export default Home