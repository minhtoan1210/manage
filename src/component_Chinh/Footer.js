import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <p>© Đồ án môn chuyên đề chuyên sâu KTPM 2</p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#">Nguyễn Thành Trọng Nghĩa</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">17DTH1B</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">1711548130</a>
                            </li>
                        </ul>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#">Nguyễn Vũ Minh Toàn</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">17DTH2A</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">1711547922</a>
                            </li>
                        </ul>

                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;