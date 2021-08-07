import React, {useState, useEffect} from 'react'; 
import './articleGallery.css';

const ArticleGallery = (props) => {

    return(
        <div className="article-gallery">
            <div className="article-content">
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
    )
}

export default ArticleGallery;