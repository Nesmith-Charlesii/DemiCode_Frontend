import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
//import axios from 'axios';
import NavBar from './NavBar/navbar';
import RegForm from './RegForm/regForm';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <NavBar/>
                <Switch>
                    <Route path="/register">
                        <RegForm />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default App;