import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import axios from 'axios';
// import jwtDecode from 'jwt-decode';
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
            userArticles: [],
            userSnippets: [],
            userVideos: [],
            userProducts: [],
            profile_photo: null,
            baseURL: "http://127.0.0.1:8000",
            registrant: false
        }
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token')
        if(this.state.logged_in) {
            try {
                // const user = jwtDecode(jwt)
                //console.log(`User: ${user.username}\nLogged_In: ${this.state.logged_in}`)
                //console.log(user)
                this.profileImage()
                let config = {headers: { Authorization: `JWT ${jwt}`}};
                const current_user = async() => {
                    let {data} = await axios.get(`http://127.0.0.1:8000/api/current_user`, config)
                    //console.log("Current User", data)
                    this.setState({
                        user: data
                    })
                }
                current_user()
            }
            catch(error) {
                console.log(error)
            }
        }
        this.allBlogs()
        this.allSnippets()
        this.allVideos()
        this.allProducts()
    }

    Register = async(newbie) => {
        console.log(newbie)
        try {
            let {data} = await axios.post(`http://127.0.0.1:8000/api/users/`, newbie)
            console.log('REGISTRANT DATA', data);
            localStorage.setItem('token', data.token);
            console.log('I AM REGISTERED!!', data.token)
            this.setState({
                registrant: true
            })
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    Login = async(user) => {
        try {
            let {data} = await axios.post(`http://127.0.0.1:8000/api/token-auth/`, user)
            //console.log('USER DATA', data);
            localStorage.setItem('token', data.token);
            console.log('THIS IS THE TOKEN', data.token)
            this.setState({
                logged_in: true,
                user: data.user
            }, () => console.log(`hello ${this.state.user.username}`))
            this.profileImage()
            // this.myArticles()
            console.log('Called profileImage function')
            
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    allBlogs = async() => {
        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/api/blog_content/all`);
            this.setState({articles: data}/*, () => console.log('ALLBLOGS', this.state.articles)*/)
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    allSnippets = async() => {
        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/api/code_snippets/all`);
            this.setState({snippets: data}/*, () => console.log('ALL SNIPPETS', this.state.snippets)*/)
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    allVideos = async() => {
        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/api/videos/all`);
            this.setState({videos: data}/*, () => console.log('ALL VIDEOS', this.state.videos)*/)
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
        //console.log('Inside of profile image func')
        try {
            let token = localStorage.getItem('token');
            let config = {headers: { Authorization: `JWT ${token}`}};
            let {data} = await axios.get(`http://127.0.0.1:8000/api/image_creator`, config);
            if(data.photo_upload) {
                this.setState({
                    profile_photo: data.photo_upload
                }/*, () => console.log('PHOTO DATA', this.state.profile_photo)*/)
            } else {
                this.setState({
                    profile_photo: data
                }, () => console.log('PHOTO DATA', this.state.profile_photo))
            }
        }
        catch(error) {
            console.log(`Whoops! Looks like we're having some technical difficulties. Try again later`)
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
        this.setState({ logged_in: false, user: '', profile_photo: null } , () => console.log('logged in: ', this.state.logged_in, 'username: ', this.state.username, 'token: ', localStorage.getItem('token'), 'profile photo: ', this.state.profile_photo));
    };

    render() {
        return (
            <div className="container-fluid p-0">
                <Nav logged_in={this.state.logged_in} Logout={this.handle_logout} username={this.state.user.username} />
                <Switch>
                    <Route path="/home" render={props => <Home {...props} articles={this.state.articles} snippets={this.state.snippets} videos={this.state.videos} products={this.state.products} baseURL={this.state.baseURL}/>}/>

                    <Route path="/profile" render={props => {
                    if(this.state.logged_in === true) {
                        return <Profile {...props} getArticles={() => this.myArticles()} myArticles={this.state.userArticles} getSnippets={() => this.mySnippets()} mySnippets={this.state.userSnippets} getVideos={() => this.myVideos()} myVideos={this.state.userVideos} getProducts={() => this.myProducts()} myProducts={this.state.userProducts} baseURL={this.state.baseURL} profilePhoto={this.state.profile_photo} user={this.state.user} />
                    } else {
                        return <Redirect to="/login"/>
                        }
                    }}
                    />

                    <Route path="/register" render={props => {
                        if(this.state.registrant === false) {
                        return <RegForm {...props} Register={newbie => this.Register(newbie)}/>
                        } else {
                            return <Redirect to="/login"/>
                        }
                    }}
                        />

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