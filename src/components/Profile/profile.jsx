import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './profile.css';

const Profile = (props) => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        myArticles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    const [content, setContent] = useState(null)

    const Articles = (props) => {
        return (
            <div className="content-wrapper">
                <h2>Articles</h2>
                <div className="article-content my-4">
                    {articles.map((article) => {
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

    const myArticles = async() => {
        console.log('inside of my articles')
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}`}};
            let {data} = await axios.get(`http://127.0.0.1:8000/api/blog_content_creator`, config)
            setArticles(data)
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    const mySnippets = async() => {
        console.log('inside of my snippets')
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}`}};
            let {data} = await axios.get(`http://127.0.0.1:8000/api/code_snippets_creator`, config)
            this.setState({
                userSnippets: data
            }, () => console.log('User snippets', this.state.userSnippets))
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    const myVideos = async() => {
        console.log('inside of my videos')
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}`}};
            let {data} = await axios.get(`http://127.0.0.1:8000/api/videos_creator`, config)
            this.setState({
                userVideos: data
            }, () => console.log('User videos', this.state.userVideos))
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    const myProducts = async() => {
        console.log('inside of my products')
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}`}};
            let {data} = await axios.get(`http://127.0.0.1:8000/api/digital_products_creator`, config)
            this.setState({
                userProducts: data
            }, () => console.log('User products', this.state.userProducts))
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }


    let image = (props.baseURL + props.profilePhoto)
    
    return (
        <div className="profile-wrapper">
            <div className="profile-display-wrapper">
                <div className="profile-image" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    
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
                        <Link to="/profile" onClick={() => props.getSnippets()}>Snippets</Link>
                        <span></span>
                    </div>
                    <div className="link">
                        <Link to="/profile" onClick={() => props.getVideos()}>Videos</Link>
                        <span></span>
                    </div>
                    <div className="link">
                        <Link to="/profile" onClick={() => props.getProducts()}>Products</Link>
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