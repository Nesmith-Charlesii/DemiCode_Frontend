import React from 'react';
import './regForm.css';

const RegForm = (props) => {
    return (
        <div className="regForm-container my-5">
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input className="form-control" type="text" name="firstName" />
                    <label htmlFor="lastName">Last Name:</label>
                    <input className="form-control" type="text" name="lastName" />
                    <label htmlFor="userName">Username:</label>
                    <input className="form-control" type="text" name="userName" />
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" name="email" />
                    <label htmlFor="password">Password:</label>
                    <input className="form-control" type="text" name="password" />
                    <label htmlFor="confirmPW">Confirm Password:</label>
                    <input className="form-control" type="text" name="confirmPW" />
                    <br/>
                    <button className="confirmReg">Sign Up!</button>
                </div>
            </form>
        </div>
    )
}

export default RegForm;