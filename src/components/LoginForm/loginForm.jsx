import React from 'react';
import CustomForm from '../CustomHook/customForm';
import './loginForm.css';
//import axios from 'axios';

const LoginForm = (props) => {

    const Submittal = () => {
        const user = {
            //Keys must match that of the model from django exactly!
            username: inputs.username,
            password: inputs.password,
        }
        props.Login(user)
    }

    const {handleChange, handleSubmit, inputs} = CustomForm(Submittal)

    return (
        <div className="login-container" id="login-wrapper">
            <div className="loginForm-container my-5">
                <form onSubmit={handleSubmit}>
                    <h2>Sign in to your account</h2>
                    <div className="form-group my-5">
                        <label htmlFor="username">Username:</label>
                        <input className="form-control" type="text" name="username" onChange={handleChange} value={inputs.username}/>
                        <label htmlFor="password">Password:</label>
                        <input className="form-control" type="password" name="password" onChange={handleChange} value={inputs.password}/>
                        <br/>
                        <div className="login-button-div my-3">
                            <button className="confirmLogin">Continue</button>
                        </div>
                        <div className="login-redirect my-4">
                            <p>No account? No worries!</p><a href="/#" onClick={props.register}>Sign up here</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm