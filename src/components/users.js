import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      msg: 'hi',
    };
  }

  getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res.data);
      this.feedUsers(res.data);
    });
  };

  feedUsers = (users) => {
    this.setState({
      userList: users,
    });
  };

  render() {
    return (
      <div>
        <p>Users Page</p>
        <button onClick={this.getUsers}>Click</button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>street name</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userList.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.address.street}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Users;
