import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Nav from './NavBar/navbar';
import RegForm from './RegForm/regForm';
import LoginForm from './LoginForm/loginForm';
import BlogForm from './BlogForm/blogForm';
import ProductForm from './ProductForm/productForm';
import SnippetForm from './SnippetForm/snippetForm';
import VideoForm from './VideoForm/videoForm';
import Checkout from './Checkout/stripeAPI';
import Home from './Home/home';
import Profile from './Profile/profile';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            logged_in: localStorage.getItem('token') ? true : false,
            articles: [],
            snippets: [],
            videos: [],
            products: [],
            baseURL: "http://127.0.0.1:8000",
            profile_photo: null
        }
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token')
        if(this.state.logged_in) {
            try {
                const user = jwtDecode(jwt)
                console.log(`User: ${user.username}\nLogged_In: ${this.state.logged_in}`)
            }
            catch(error) {
                console.log(error)
            }
        }
        this.allBlogs()
        this.allSnippets()
        this.allVideos()
        this.profileImage()
    }

    Register = async(newbie) => {
        console.log(newbie)
        try {
            let {data} = await axios.post(`http://127.0.0.1:8000/api/users/`, newbie)
            console.log('REGISTRANT DATA', data);
            localStorage.setItem('token', data.token);
            console.log('I AM REGISTERED!!', data.token)
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    Login = async(user) => {
        try {
            let {data} = await axios.post(`http://127.0.0.1:8000/api/token-auth/`, user)
            console.log('USER DATA', data);
            localStorage.setItem('token', data.token);
            console.log('THIS IS THE TOKEN', data.token)
            this.setState({
                logged_in: true,
                user: data.user
            })
            console.log(`hello ${this.state.username}`)
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    allBlogs = async() => {
        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/api/blog_content/all`);
            this.setState({articles: data}, () => console.log('ALLBLOGS', this.state.articles))
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    allSnippets = async() => {
        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/api/code_snippets/all`);
            this.setState({snippets: data}, () => console.log('ALL SNIPPETS', this.state.snippets))
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    allVideos = async() => {
        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/api/videos/all`);
            this.setState({videos: data}, () => console.log('ALL VIDEOS', this.state.videos))
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    allProducts = async() => {
        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/api/digital_products/all`);
            console.log(data)
            this.setState({products: data}, () => console.log('ALL PRODUCTS', this.state.products))
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    profileImage = async() => {
        if(this.state.logged_in === true) {
            try {
                let token = localStorage.getItem('token');
                let config = {headers: { Authorization: `JWT ${token}`}};
                let {data} = await axios.get(`http://127.0.0.1:8000/api/image_creator`, config);
                // console.log('IMAGE', data)
                if(data.photo_upload != null) {
                    this.setState({
                        profile_photo: data.photo_upload
                    }, () => console.log(this.state.profile_photo))
                } else {
                    console.log('USER HAS NO IMAGE')
                }
            }
            catch(error) {
                alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
            }
        }
    }

    Contributors = async() => {
        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/api/users`)
            console.log(data)
        }
        catch(error) {

        }
    }

    
    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, user: '', profile_photo: null } , () => console.log(this.state.logged_in, this.state.username, localStorage.getItem('token')));
    };

    render() {
        return (
            <div className="container-fluid p-0">
                <Nav logged_in={this.state.logged_in} Logout={this.handle_logout} username={this.state.user.username} />
                <Switch>
                    <Route path="/home" render={props => <Home {...props} articles={this.state.articles} snippets={this.state.snippets} videos={this.state.videos} products={this.state.products} baseURL={this.state.baseURL}/>}/>

                    <Route path="/profile" render={props => {
                    if(this.state.logged_in === true) {
                        return <Profile {...props} myArticles={this.state.articles} mySnippets={this.state.snippets} myVideos={this.state.videos} myProducts={this.state.products} baseURL={this.state.baseURL} profile={this.state.profile_photo} user={this.state.user} getPhoto={this.profileImage} />
                    } else {
                        return <Redirect to="/login"/>
                        }
                    }}
                    />

                    <Route path="/register" render={props => <RegForm {...props} Register={newbie => this.Register(newbie)}/>}/>

                    <Route path="/login" render={props => { 
                        if(this.state.logged_in === false) { 
                            return <LoginForm {...props} Login={user => this.Login(user)}/>
                        } else {
                            return <Redirect to="/profile"/>
                        }
                    }}
                    />

                    <Route path="/articles" render={props => <BlogForm {...props} blogSubmittal={(blog) => {this.blogSubmittal(blog)}} />}/>
                    <Route path="/products" render={props => <ProductForm {...props}/>}/>
                    <Route path="/snippets" render={props => <SnippetForm {...props} />}/>
                    <Route path="/videos" render={props => <VideoForm {...props} />}/>
                    <Route path="/checkout" render={props => <Checkout {...props} />}/>
                </Switch>
            </div>
        )
    }
}

export default App;