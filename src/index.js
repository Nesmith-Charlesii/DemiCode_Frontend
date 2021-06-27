import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app.jsx';


ReactDom.render(
    <Router>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Router>, 
    document.getElementById('root')
);

