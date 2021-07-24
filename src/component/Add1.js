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
                  <input type="text" className="form-control" placeholder="Mã Số Sinh Viên" name="mssv" onChange={(event) => this.laydl(event)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Mã Lớp" name="malop" onChange={(event) => this.laydl(event)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Quê Quán" name="quequan" onChange={(event) => this.laydl(event)} />
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <select className="custom-select" required name="permission" onChange={(event) => this.laydl(event)}>
                      <option value>Chọn Quyền</option>
                      <option value={1}>Sinh Viên Năm 1</option>
                      <option value={2}>Sinh Viên Năm 2</option>
                      <option value={3}>Sinh Viên Năm 3</option>
                    </select>
                  </div>
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