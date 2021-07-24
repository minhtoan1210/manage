import React, { Component } from 'react';

class ChiTiettable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai2: true
    }
  }
  dlsua1 = () => {
    this.props.dlsua();

    this.props.chuyenformluu();
  }
  phanloai = () => {
    if (this.props.permissions == 1)
      return "Sinh Viên Năm 1";
    else if (this.props.permissions == 2)
      return "Sinh Viên Năm 2";
    else if (this.props.permissions == 3)
      return "Sinh Viên Năm 3 ";
  }
  suadl = (item) => {
    this.props.setUser(item);

  }
  anhien = () => {
    this.setState({
      trangthai2: !this.state.trangthai2,
    });
    console.log(this.state.trangthai2);
  }
  render() {
    return (

      <tr>
        <td>{this.props.stt}</td>
        <td>{this.props.names}</td>
        <td>{this.props.mssv}</td>
        <td>{this.props.malop}</td>
        <td>{this.props.quequan}</td>
        <td>{this.props.tels}</td>
        <td>
          <div className="btn btn-warning sua">
            <i className="fa fa-edit " onClick={() => this.dlsua1()} >Sửa</i>
          </div>
          <div className="btn btn-danger xoa">
            <i className="fa fa-edit" onClick={(item) => this.suadl(this.props.ids)}>Xoá</i>
          </div>
        </td>
        <td />
      </tr>

    );
  }
}

export default ChiTiettable;