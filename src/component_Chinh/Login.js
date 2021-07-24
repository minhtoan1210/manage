import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <header className="masthead">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-7 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-5">Trang đăng nhập</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* begin đăng nhập */}
                    <section className="page-section" id="login">
                        <div className="container">
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Đăng nhập ngay</h2>
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>UserName</label>
                                                <input className="form-control" id="name" type="text" placeholder="UserName" required="required" data-validation-required-message="Please enter user name." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>PassWord</label>
                                                <input className="form-control" id="email" type="email" placeholder="PassWord" required="required" data-validation-required-message="Please enter your pass word." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        
                                        <br />
                                        <div id="success" />
                                        <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Login</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end đăng nhập */}
                </div>
            </div>
        );
    }
}

export default Login;
