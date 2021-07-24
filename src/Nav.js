import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                {/* begin menu   */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav2">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link js-scroll-trigger">Trang chủ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/sinhvien" className="nav-link js-scroll-trigger">Danh Sách Sinh Viên</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/giaovien" className="nav-link js-scroll-trigger">Danh Sách Giáo Viên</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/phong" className="nav-link js-scroll-trigger">Danh Sách Phòng Nội Trú</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink to="/danhsachphong" className="nav-link js-scroll-trigger">Danh sách tất cả các phòng</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/danhsachsvgv" className="nav-link js-scroll-trigger">Danh sách tất cả sinh viên và giáo viên</NavLink>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink to="/lienhe" className="nav-link js-scroll-trigger">Liên hệ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/dangnhap" className="nav-link js-scroll-trigger">Đăng nhập</NavLink>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* end menu */}
            </div>

        );
    }
}

export default Nav;