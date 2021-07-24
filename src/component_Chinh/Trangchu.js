import React, { Component } from 'react';

class Trangchu extends Component {
    render() {
        return (
            <div id="trangChu">
                <div className="container">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to={0} className="active" />
                            <li data-target="#myCarousel" data-slide-to={1} />
                            <li data-target="#myCarousel" data-slide-to={2} />
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="https://ntt.edu.vn/web/upload/images/slider/BANNER%20FB-02.JPG" alt="Los Angeles" style={{ width: '100%' }} />
                            </div>
                            <div className="item">
                                <img src="https://ntt.edu.vn/web/upload/images/Tin_Tuc/201705_tin/1200x420-01.jpg" alt="Chicago" style={{ width: '100%' }} />
                            </div>
                        </div>
                        {/* Left and right controls */}
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h1>
                        Trang web quản lý ký túc xá sinh viên đại học Nguyễn Tất Thành
                    </h1>
                </div>
            </div>
        );
    }
}

export default Trangchu;