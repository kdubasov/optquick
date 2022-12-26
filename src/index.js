import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/components/buttons.css';
import './styles/components/alerts.css';
import './styles/components/titles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    </BrowserRouter>
);
