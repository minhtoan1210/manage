import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: true
        }
    }
    chuyenform = () =>
    {
      this.setState({
        trangthai : !this.state.trangthai
        
      });
      console.log(this.state.trangthai)
      
    }
    dongmoform = () => {
      if(this.state.trangthai === true)
      {
          return (<div className="col">
                      
          <div style={{width: '310px'}}>
            <div  style={{width: '310px'}}>
              <div className="card-body">
                <h5 className="card-title">Tên User</h5>
                <div className="form-group">
                  <input type="text" className="form-control"  placeholder="Tên User" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control"  placeholder="Điện Thoại" />
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <select className="custom-select" required>
                      <option value>Chọn Quyền</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
                <a href="#" className="btn btn-primary">Thêm Mới</a>
              </div>
            </div>
          </div>
        </div>)
      }
    }
    hienthinut = () =>{
        if(this.state.trangthai === true)
        {
            return  <button onClick={() => this.chuyenform()}>Đóng Lại</button>
        }
        else
        {
            return  <button onClick={() => this.chuyenform()}>Thêm Mới</button>
        }
    }
    
    render() {
        return (
           
          <div className="col-3">
            
             {this.dongmoform() }
            </div>
                  
            
        );
    }
}

export default Add;