import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.props.users.map(u =>(
            <li>{u.username}</li>
          ))}
        </ul>
        <p>{`User count: ${this.props.users.length}`}</p>
      </div>
    )
  }

}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return { users: state.users };
};

export default connect(mapStateToProps)(Users);
