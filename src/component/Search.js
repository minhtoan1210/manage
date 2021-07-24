import React, { Component } from 'react';
import Add2 from './Add2';
class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dl: '',
      object: {}
    }

  }
  getUser = (item) => {
    this.setState({
      object: item
    })
    this.props.getUser(item)
  }
  anhien = () => {
    if (this.props.anhien === true) {
      return <button onClick={this.props.ketnoi1} >Đóng Lại</button>
    }
    else {
      return <button onClick={this.props.ketnoi1}>Thêm Mới</button>
    }
  }
  ischang = (event) => {
    console.log(event.target.value)
    this.setState({
      dl: event.target.value
    })
    this.props.indl1(this.state.dl);
  }
  thaydoitrangthai1 = () => {
    if (this.props.anhien1 == true) {
      return <Add2 getUser={(item) => this.getUser(item)} dlsua3={this.props.dlsua3}
        ketnoi3={() => this.props.ketnoi3()}></Add2>;
    }
  }

  render() {
    return (
      <div className="col-12">
        {this.thaydoitrangthai1()}
        <div className="col-12" >
          <div className="form-group">
            <div className="btn-group" 
                role="group" 
                aria-label="Button group">
              <input type="text" 
                className="form-control" 
                placeholder="Nhập Từ Khoá" 
                onChange={(event) => this.ischang(event)} />
              <div className="btn btn-info" 
                  onClick={(dl) => this.props.indl1(this.state.dl)}>
                     Tìm 
              </div>
            </div>
            <label />
          </div>
        </div>
        <div className="col-12">
          <hr />

          {
            this.anhien()
          }
        </div>
      </div>
    );
  }
}

export default search;