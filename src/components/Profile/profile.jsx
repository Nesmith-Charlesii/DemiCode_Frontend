import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './profile.css';

const Profile = (props) => {
    const [content, setContent] = useState("")
    
    useEffect(() => {
        console.log('EFFECT')
    }, [content])

    let image = (props.baseURL + props.profilePhoto)

    const Articles = (props) => {
        return (
            <div className="content-wrapper">
                <h2>Articles</h2>
                <div className="article-content my-4">
                    {props.myArticles.map((article) => {
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

    return (
        <div className="profile-wrapper">
            <div className="profile-display-wrapper">
                <div className="profile-image" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
                    {/* <img src={props.baseURL + props.profilePhoto} alt="profile"/>  */}
                </div>
                <div className="profile-name">
                    <p>{props.user.first_name} {props.user.last_name}</p>
                    <p id="aka">A.K.A</p>
                    <p>{props.user.username}</p>
                </div>
            </div>
            <div className="profile-nav">
                <ul>
                    <div className="link">
                        <Link to="/profile" onClick={() => setContent(Articles)}>Articles</Link>
                        <span></span>
                    </div>
                    <div className="link">
                        <a href="/profile" onClick={() => setContent("snippets")}>Snippets</a>
                        <span></span>
                    </div>
                    <div className="link">
                        <a href="/profile" onClick={() => setContent("videos")}>Videos</a>
                        <span></span>
                    </div>
                    <div className="link">
                        <a href="/profile" onClick={() => setContent("products")}>Products</a>
                        <span></span>
                    </div>
                </ul>
            </div>
            <div className="profile-content-wrapper">
                {content}
            </div>
        </div>

    )
}

            /* <div className="profile-content-wrapper">
                <div className="content-wrapper">
                    <h2>Articles</h2>
                    <div className="article-content my-4">
                        {props.myArticles.map((article) => {
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
                    <h2>Videos</h2>
                    <div className="video-content my-4">
                        {props.myVideos.map((video) => {
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
                        {props.mySnippets.map((snippet) => {
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
                    <h2>Products</h2>
                    <div className="product-content my-4">
                        {props.myProducts.map((product) => {
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
                </div> */


export default Profile;