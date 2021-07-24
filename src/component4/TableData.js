import React, { Component } from 'react';
import ChiTiettable from './ChiTiettable';
import Add2 from './Add2';
class TableData extends Component {
  constructor(props) {
    super(props);

  }

  csdl1 = () =>
  (
    this.props.csdl.map((x, key) =>
    (
      <ChiTiettable setUser={(item) => this.props.setUser(item)} chuyenformluu={() => this.props.chuyenformluu()} dlsua={(user) => this.props.dlsua(x)} names={x.name} ids={x.id} key={key} ids={x.id} tels={x.tel} permissions={x.permission} stt={key} ketnoi2={() => this.props.ketnoi1()}
        mssv={x.mssv} malop={x.malop} quequan={x.quequan} ></ChiTiettable>
    )
    )
  );
  render() {

    console.log(this.props.chuyenformluu);
    return (

      <div className="col-12">
        <table className="table table-striped  table-responsive">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>TÊN</th>
              <th>Mã Sinh Viên</th>
              <th>Mã Phòng</th>
              <th>Quê Quán</th>
              <th>SỐ ĐIỆN THOẠI</th>
              <th>Năm Học</th>

            </tr>
          </thead>
          <tbody>
            {this.csdl1()}

          </tbody>
        </table>

      </div>

    );
  }
}

export default TableData;