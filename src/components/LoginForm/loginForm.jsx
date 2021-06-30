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
        console.log('USER OBJECT', user);
        props.Login(user)
    }

    const {handleChange, handleSubmit, inputs} = CustomForm(Submittal)

    return (
        <div className="loginForm-container my-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input className="form-control" type="text" name="username" onChange={handleChange} value={inputs.username}/>
                    <label htmlFor="password">Password:</label>
                    <input className="form-control" type="password" name="password" onChange={handleChange} value={inputs.password}/>
                    <br/>
                    <button className="confirmReg">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm