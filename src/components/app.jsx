import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
//import axios from 'axios';
import NavBar from './NavBar/navbar';

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
                    <Route path="/login">
                        
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default App;