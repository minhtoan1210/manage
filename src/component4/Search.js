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

      </div >
    );
  }
}

export default search;