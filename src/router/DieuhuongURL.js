import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from '../component/App';
import App1 from '../component1/App1';
import App2 from '../component2/App2';
import App3 from '../component3/App3';
import Contact from '../component_Chinh/Contact';
import Login from '../component_Chinh/Login';
import Trangchu from '../component_Chinh/Trangchu';
import Danhsach from '../Danhsach';

class DieuhuongURL extends Component {
    render() {
        return (

            <div>
                <Switch>
                    <Route exact path="/">
                        <Trangchu />
                    </Route>
                    <Route path="/sinhvien">
                        <App />
                    </Route>
                    <Route path="/giaovien">
                        <App1 />
                    </Route>
                    <Route path="/phong">
                        <App2 />
                    </Route>
                    <Route path="/lienhe">
                        <Contact />
                    </Route>
                    <Route path="/dangnhap">
                        <Login />
                    </Route>
                    <Route path="/danhsachphong">
                        <App3 />
                    </Route>
                    <Route path="/danhsachsvgv">
                        <Danhsach />
                    </Route>

                </Switch>
            </div >
        )
    }
}

export default DieuhuongURL;