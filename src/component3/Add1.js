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

  render() {
    console.log(this.state)
    return (
      <div>

      </div>
    );
  }
}

export default Add1;