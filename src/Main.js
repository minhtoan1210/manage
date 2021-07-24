import React from 'react';
import Nav from './Nav'; import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DieuhuongURL from './router/DieuhuongURL';
import Footer from './component_Chinh/Footer';
function Main() {
    return (
        <Router >
            <div>
                <Nav></Nav>
                <DieuhuongURL></DieuhuongURL>
                <Footer></Footer>
            </div>
        </Router >
    );

}


export default Main;
