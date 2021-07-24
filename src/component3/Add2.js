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

        </form>
      </div>
    );
  }
}

export default Add2;