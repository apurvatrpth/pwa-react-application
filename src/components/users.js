import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class Users extends Component {
  constructor(props) {
    let mode = 'online';

    super(props);

    this.state = {
      userList: [],
      msg: 'hi',
    };
  }

  // getUsers = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
  //     console.log(res.data);
  //     this.feedUsers(res.data);
  //   });
  // };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
        this.feedUsers(res.data);
        localStorage.setItem('users', JSON.stringify(res.data)); // storing data for cached views in localstorage
      })
      .catch((e) => {
        // alert('Not connected to the internet, data fetched from localstorage');
        this.mode = 'offline';
        let collection = localStorage.getItem('users');
        this.feedUsers(JSON.parse(collection));
      });
  }

  feedUsers = (users) => {
    this.setState({
      userList: users,
    });
  };

  render() {
    return (
      <div>
        <p>Users Page</p>
        <div>
          {this.mode === 'offline' ? (
            <div class='alert alert-warning' role='alert'>
              You are offline, this data is fetched from localstorage
            </div>
          ) : null}
        </div>

        {/* <button onClick={this.getUsers}>Click</button> */}
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
