import React from 'react';
import CustomForm from '../CustomHook/customForm';
import axios from 'axios';
import './regForm.css';

const RegForm = (props) => {

    const Submittal = () => {
        let input = {
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            userName: inputs.userName,
            email: inputs.email,
            password: inputs.password,
            confirmPW: inputs.confirmPW,
        }
        if (inputs.password !== inputs.confirmPW) {
            alert("Confirm password and password must match")
        } else {
            console.log('PASSWORDS MATCH', input);
        }
    }

    const {handleChange, handleSubmit, inputs} = CustomForm(Submittal)

    return (
        <div className="regForm-container my-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input className="form-control" type="text" name="firstName" onChange={handleChange} value={inputs.firstName}/>
                    <label htmlFor="lastName">Last Name:</label>
                    <input className="form-control" type="text" name="lastName" onChange={handleChange} value={inputs.lastName}/>
                    <label htmlFor="userName">Username:</label>
                    <input className="form-control" type="text" name="userName" onChange={handleChange} value={inputs.userName}/>
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" name="email" onChange={handleChange} value={inputs.email}/>
                    <label htmlFor="password">Password:</label>
                    <input className="form-control" type="text" name="password" onChange={handleChange} value={inputs.password}/>
                    <label htmlFor="confirmPW">Confirm Password:</label>
                    <input className="form-control" type="text" name="confirmPW" onChange={handleChange} value={inputs.confirmPW}/>
                    <br/>
                    <button className="confirmReg">Sign Up!</button>
                </div>
            </form>
        </div>
    )
}

export default RegForm;