import React, { Component } from 'react';
import '../App.css';
import Add from './Add';
import Add1 from './Add1';
import Header from './Header.js';
import Search from './Search.js';
import TableData from './TableData.js';
import Dl from './DaTa.json';

import { v4 as uuidv4 } from 'uuid';

class App1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trangthai1: true,
      trangluu: true,
      data: Dl,
      dl1: '',
      trangthai: true,
      dl2: {}

    }
  }
  componentWillMount() {
    console.log(localStorage.getItem('userData'));
    // else
    // {
    //   var temp = JSON.parse(localStorage.getItem('userData'));
    //   this.setState(
    //     {
    //       data:temp
    //     }
    //   )
    // }
  }

  dlsua = (user) => {
    this.setState({
      dl2: user
    });

  }
  getUser = (item) => {
    this.state.data.forEach((value, key) => {
      if (value.id === item.id) {
        value.name = item.name;
        value.tel = item.tel;
        value.permission = item.permission;
        value.mssv = item.mssv;
        value.malop = item.malop;
        value.quequan = item.quequan;
      }
    })

    console.log("thông tin đã sửa xong" + item);
  }
  setUser = (item) => {
    var dl = this.state.data;
    dl = dl.filter(x => x.id != item)
    this.setState({
      data: dl
    })
    // localStorage.setItem('userData',JSON.stringify(dl));
  }
  chuyenformluu = () => {
    this.setState({
      trangluu: !this.state.trangluu
    })
    console.log(this.state.trangluu)
  }

  chuyenform = () => {
    this.setState({
      trangthai1: !this.state.trangthai1

    });
    console.log(this.state.trangthai1)

  }

  indl = (dl) => {
    this.setState({
      dl1: dl
    })
    console.log("Dữ Liệu" + dl);
  }
  getdata = (name, tel, permission, mssv, malop, quequan) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.mssv = mssv;
    item.malop = malop;
    item.quequan = quequan;
    item.tel = tel;
    item.permission = permission;
    var item1 = this.state.data;
    item1.push(item);
    this.setState({
      data: item1
    })
    // localStorage.setItem('userData',JSON.stringify(item))
  }
  render() {
    // localStorage.setItem('userData',Dl);

    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.dl1) !== -1) {
        ketqua.push(item);
      }
    })
    console.log(ketqua);
    return (
      <div className="App">
        <Header></Header>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUser={(item) => this.getUser(item)} ketnoi1={() => this.chuyenform()} ketnoi3={() => this.chuyenformluu()} anhien={this.state.trangthai1} anhien1={this.state.trangluu} indl1={(dl) => this.indl(dl)} dlsua3={this.state.dl2} ></Search>
              <TableData setUser={(item) => this.setUser(item)} csdl={ketqua} dlsua={(user) => this.dlsua(user)} ketnoi1={() => this.chuyenform()} chuyenformluu={() => this.chuyenformluu()}></TableData>
              <Add1 ketnoi={this.state.trangthai1} ketnoi1={(name, tel, permission, mssv, malop, quequan) => this.getdata(name, tel, permission, mssv, malop, quequan)}></Add1>
            </div>
          </div>
        </div>


      </div>
    );
  }
}


export default App1;
