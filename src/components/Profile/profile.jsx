import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../fontawesome/css/all.min.css';
import profileCSS from './profile.css';

const Profile = (props) => {

    const [articles, setArticles] = useState([])
    const [snippets, setSnippets] = useState([])
    const [videos, setVideos] = useState([])
    const [products, setProducts] = useState([])
    const [imageSource, setImageSource] = useState({})
    
    let CSS = () => {
        return (
            profileCSS
        )
    }

    useEffect(() => {
        // Must retrieve all data from api's on page load for .map function to render correct data
        myArticles()
        mySnippets()
        myVideos()
        myProducts()
        // console.log('Articles useEffect', articles)
        // console.log('Snippets useEffect', snippets)
        // console.log('Videos useEffect', videos)
        // console.log('Products useEffect', products)
        console.log('Image useEffect', imageSource.name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CSS(), imageSource]); 

    const Upload = () => {
        document.getElementById("image-upload").click()
    }

    const Default = (props) => {
        return (
            <div className="content-load">
                <i className="fas fa-check-square fa-7x" id="check-icon"><p id="check-text" className="my-3">Content Loaded! Select from dash nav above</p></i>
            </div>
        )
    }

    const Articles = (props) => {
        return (
            <div className="content-wrapper">
                <Link to="/article-form">
                    <i className="fas fa-arrow-circle-up fa-5x" id="upload-arrow"><p id="icon-text" className="my-3">Create an article</p></i>
                </Link>
                <div className="article-content">
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

    const Snippets = (props) => {
        return (
            <div className="content-wrapper">
                <Link to="/snippet-form">
                    <i className="fas fa-arrow-circle-up fa-5x"><p id="icon-text" className="my-3">Create a snippet</p></i>
                </Link>
                <div className="snippet-content">
                    {snippets.map((snippet) => {
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

    const Videos = (props) => {
        return (
            <div className="content-wrapper">
                <Link to="/video-form">
                    <i className="fas fa-arrow-circle-up fa-5x"><p id="icon-text" className="my-3">Upload a video</p></i>
                </Link>
                <div className="video-content">
                    {videos.map((video) => {
                    return (
                        <div className="video-card-content" key={video.id}>
                            <video controls autoPlay loop muted>
                                <source src={baseURL + video.video} type="video/mp4"></source>
                            </video>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }

    const Products = (props) => {
        return (
            <div className="content-wrapper">
                <Link to="/product-form">
                    <i className="fas fa-arrow-circle-up fa-5x"><p id="icon-text" className="my-3">Create a product</p></i>
                </Link>
                <div className="product-content">
                    {products.map((product) => {
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
        )
    }

    const handleChange = (e) => {
        console.log("change value name", e.target.files[0].name)
        setImageSource(e.target.files[0])
        document.getElementById('profile-uploader').style.color = "green"
        document.getElementById('confirm-upload').style.display = "flex"
    }

    const handleSubmit = e => {
        console.log('handleSubmit event', e)
        e.preventDefault()
        let imageData = new FormData()
        imageData.append('photo_upload', imageSource, imageSource.name)
        for(var pair of imageData.entries()) {
            console.log('form data entries', pair)
        }
        Uploader(imageData)
    }

    const Uploader = async(imageData) => {
        console.log('UPLOADER API', imageData)
        try{
            let token = localStorage.getItem('token');
            let config = {headers: {Authorization: `JWT ${token}`} ,'content-type': 'multipart/form-data'}
            let {data} = await axios.post(`http://127.0.0.1:8000/api/image_creator/`, imageData, config)
            console.log('image data', data)
            props.getProfilePhoto()
        }
        catch(error) {
            alert(`Whoops! ${error} Looks like we're having some technical difficulties. Try again later`)
        }
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
            setSnippets(data)
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
            setVideos(data)
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
            setProducts(data)
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }


    let image = (props.baseURL + props.profilePhoto)
    const baseURL = 'http://127.0.0.1:8000'
    const [content, setContent] = useState(Default)
    
    return (
        <div className="profile-wrapper">
            <div className="profile-header">
                <div className="profile-display-wrapper">
                    <div className="profile-image" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <div className="profile-uploader">
                            <form onSubmit={handleSubmit} id="uploadForm">
                                <label htmlFor="profile-pic"><i className="fas fa-camera fa-3x" id="profile-uploader" onClick={() => Upload()}></i></label>
                                <input type="file" accept="image/*" style={{display:"none"}} name="photo_upload" id="image-upload" onChange={handleChange} /*value={imageSource} NO VALUE NEEDED FOR FILE UPLOADS*/ />
                                <button className="btn btn-success btn-sm" id="confirm-upload">confirm</button>
                            </form>
                        </div>
                    </div>
                    <div className="profile-name">
                        <p>{props.user.first_name} {props.user.last_name}</p>
                        <p id="aka">A.K.A</p>
                        <p>{props.user.username}</p>
                    </div>
                </div>
            </div>
            <div className="profile-nav">
                <ul>
                    <div className="link">
                        <Link to="/profile/articles" onClick={() => {setContent(Articles); CSS()}}>Articles</Link>
                        <span></span>
                    </div>
                    <div className="link">
                        <Link to="/profile/snippets" onClick={() => {setContent(Snippets); CSS()}}>Snippets</Link>
                        <span></span>
                    </div>
                    <div className="link">
                        <Link to="/profile/videos" onClick={() => {setContent(Videos); CSS()}}>Videos</Link>
                        <span></span>
                    </div>
                    <div className="link">
                        <Link to="/profile/products" onClick={() => {setContent(Products); CSS()}}>Products</Link>
                        <span></span>
                    </div>
                </ul> 
            </div>
            <div className="profile-content-wrapper">
                <Link to="/product-display">{content}</Link>
            </div>
        </div>

    )
}

export default Profile;