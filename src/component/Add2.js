import React, { Component } from 'react';

class Add2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.dlsua3.id,
      name: this.props.dlsua3.name,
      tel: this.props.dlsua3.tel,
      permission: this.props.dlsua3.permission,
      mssv: this.props.dlsua3.mssv,
      malop: this.props.dlsua3.malop,
      quequan: this.props.dlsua3.quequan,
    }
  }
  getsuadl = (even) => {
    const name = even.target.name;
    const ten = even.target.value;
    this.setState(
      {
        [name]: ten
      }
    );
  }
  onClick1 = () => {
    var item = {};
    item.id = this.state.id;
    item.name = this.state.name;
    item.tel = this.state.tel;
    item.permission = this.state.permission;
    item.quequan = this.state.quequan;
    item.mssv = this.state.mssv;
    item.malop = this.state.malop;
    this.props.getUser(item);
    console.log("item là gì " + this.state.permission);
    this.props.ketnoi3();
  }
  render() {
    return (
      <div >
        <form>
          <div>
            <div style={{ width: '310px', position: 'absolute', right: "-114px", top: "93px", zIndex: "10" }}>
              <div className="card-body" >
                <h5 className="card-title">Sửa Thông Tin</h5>
                <div className="form-group">
                  <input defaultValue={this.props.dlsua3.name} onChange={(even) => this.getsuadl(even)} type="text" className="form-control" placeholder="Tên User" name="name" />
                </div>
                <div className="form-group">
                  <input defaultValue={this.props.dlsua3.tel} onChange={(even) => this.getsuadl(even)} type="text" className="form-control" placeholder="Điện Thoại" name="tel" />
                </div>
                <div className="form-group">
                  <input defaultValue={this.props.dlsua3.mssv} onChange={(even) => this.getsuadl(even)} type="text" className="form-control" placeholder="Mã Số Sinh Viên" name="mssv" />
                </div>
                <div className="form-group">
                  <input defaultValue={this.props.dlsua3.malop} onChange={(even) => this.getsuadl(even)} type="text" className="form-control" placeholder="Mã Lớp" name="malop" />
                </div>
                <div className="form-group">
                  <input defaultValue={this.props.dlsua3.quequan} onChange={(even) => this.getsuadl(even)} type="text" className="form-control" placeholder="Quê Quán" name="quequan" />
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <select className="custom-select" name="permission" defaultValue={this.props.dlsua3.permission}>
                      <option value>Chọn Quyền</option>
                      <option value={1} >Sinh Viên Năm 1</option>
                      <option value={2}>Sinh Viên Năm 2</option>
                      <option value={3}>Sinh Viên Năm 3</option>
                    </select>
                  </div>
                </div>
                <input type="button" className="btn btn-primary" value="Lưu" onClick={() => this.onClick1()} />
              </div>
            </div>
          </div>
        </form>
      </div >
    );
  }
}
export default Add2;