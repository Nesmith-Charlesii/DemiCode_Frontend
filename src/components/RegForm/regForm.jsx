import React from 'react';
import CustomForm from '../CustomHook/customForm';
//import axios from 'axios';
import './regForm.css';

const RegForm = (props) => {

    const Submittal = () => {
        const newbie = {
            //Keys must match that of the model from django exactly!
            first_name: inputs.firstName,
            last_name: inputs.lastName,
            username: inputs.username,
            email: inputs.email,
            password: inputs.password,
        }
        console.log('NEWBIE DATA HERE', newbie)
        if (inputs.password !== inputs.confirmPW) {
            alert("Confirm password and password must match")
        } else {
            console.log('PASSWORDS MATCH', newbie);
            props.Register(newbie)
        }
    }

    const {handleChange, handleSubmit, inputs} = CustomForm(Submittal)

    return (
        <div className="reg-container" id="reg-wrapper">
            <div className="reg-form-greeting">
                <div className="reg-form-context">
                    
                </div>
            </div>
            <div className="reg-form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className="form-group my-4">
                        {/* <label htmlFor="firstName">First Name:</label> */}
                        <input type="text" name="firstName" onChange={handleChange} value={inputs.firstName} placeholder="first name"/>
                        {/* <label htmlFor="lastName">Last Name:</label> */}
                        <input type="text" name="lastName" onChange={handleChange} value={inputs.lastName} placeholder="last name"/>
                        {/* <label htmlFor="username">Username:</label> */}
                        <input type="text" name="username" onChange={handleChange} value={inputs.username} placeholder="username"/>
                        {/* <label htmlFor="email">Email:</label> */}
                        <input type="email" name="email" onChange={handleChange} value={inputs.email} placeholder="email"/>
                        {/* <label htmlFor="password">Password:</label> */}
                        <input type="password" name="password" onChange={handleChange} value={inputs.password} placeholder="password"/>
                        {/* <label htmlFor="confirmPW">Confirm Password:</label> */}
                        <input type="password" name="confirmPW" onChange={handleChange} value={inputs.confirmPW} placeholder="confirm password"/>
                        <br/>
                        <button className="confirmReg">Sign Up! <i className="fas fa-arrow-right mx-2"></i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegForm;