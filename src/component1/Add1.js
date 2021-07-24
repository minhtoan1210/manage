import React, { Component } from 'react';

class Add1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      permission: "",
      mssv: "",
      malop: "",
      quequan: ""
    }
  }

  laydl = (event) => {
    const ten = event.target.name;
    const giatri = event.target.value;
    this.setState({
      [ten]: giatri
    });
  }
  dongmoform = () => {
    if (this.props.ketnoi === true) {
      return (<div className="col-12">
        <form>
          <div style={{ width: '310px' }}>
            <div style={{ width: '310px' }}>
              <div className="card-body">
                <h5 className="card-title">Thêm Mới</h5>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Tên User" name="name" onChange={(event) => this.laydl(event)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Điện Thoại" name="tel" onChange={(event) => this.laydl(event)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Mã Số Giáo Viên" name="mssv" onChange={(event) => this.laydl(event)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Mã Phòng" name="malop" onChange={(event) => this.laydl(event)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Quê Quán" name="quequan" onChange={(event) => this.laydl(event)} />
                </div>
                <input type="reset" className="btn btn-primary" onClick={(name, tel, permission, mssv, malop, quequan) => this.props.ketnoi1(this.state.name, this.state.tel, this.state.permission, this.state.mssv, this.state.quequan, this.state.malop)} value="thêm mới" />
              </div>
            </div>
          </div>
        </form>
      </div>)
    }
  }
  render() {
    console.log(this.state)
    return (
      <div>
        { this.dongmoform()}
      </div>
    );
  }
}

export default Add1;