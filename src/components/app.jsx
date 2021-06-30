import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Nav from './NavBar/navbar';
import RegForm from './RegForm/regForm';
import LoginForm from './LoginForm/loginForm';
import BlogForm from './BlogForm/blogForm';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            logged_in: localStorage.getItem('token') ? true : false
        }
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token')
        if(this.state.logged_in) {
            try {
                const user = jwtDecode(jwt)
                console.log(user)
                // let {data} = axios.get(`http://127.0.0.1:8000/api/current_user/`, {
                //     headers: {
                //         Authorization: `JWT ${localStorage.getItem('token')}`
                //     }
                // })
                console.log(this.state.logged_in)
                // this.setState({username: data.username})
            }
            catch(error) {
                console.log(error)
            }
        }
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
        console.log('USER LOGIN API', user)
        try {
            let {data} = await axios.post(`http://127.0.0.1:8000/api/token-auth/`, user)
            console.log('USER DATA', data);
            localStorage.setItem('token', data.token);
            console.log('THIS IS THE TOKEN', data.token)
            this.setState({
                logged_in: true,
                username: data.user.username
            })
            console.log(`hello ${this.state.username}`)
        }
        catch(error) {
            alert(`Whoops! Looks like we're having some technical difficulties. Try again later`)
        }
    }

    
    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' } , () => console.log(this.state.logged_in, this.state.username, localStorage.getItem('token')));
    };

    render() {
        return (
            <div className="container-fluid p-0">
                <Nav logged_in={this.state.logged_in} Logout={this.handle_logout} username={this.state.username} />
                <Switch>
                    <Route path="/register">
                        <RegForm Register={(newbie) => this.Register(newbie)}/>
                    </Route>
                    <Route path="/login">
                        <LoginForm Login={(user) => this.Login(user)}/>
                    </Route>
                    <Route path="/articles">
                        <BlogForm  />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default App;