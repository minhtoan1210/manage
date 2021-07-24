import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <div>
        <header className="masthead tin tuc">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-7 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5" style={{ fontSize: "30px" }}>Danh sách quản lý giáo viên nội trú</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default header;