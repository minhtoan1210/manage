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
      return "Giáo Viên";
    else if (this.props.permissions == 2)
      return "Sinh Viên";
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
        <td>{this.props.tels}</td>
        <td>{this.phanloai()}</td>
      </tr>
    );
  }
}
export default ChiTiettable;

