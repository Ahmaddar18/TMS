import React, { Component } from "react";
const axios = require("axios").default;
export default class Login extends Component {
  login = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (!username) {
      alert("Username cannot be null");
    } else if (!password) {
      alert("password cannot be null");
    }
    if (username.includes("@")) {
      axios
        .post("http://localhost/t/select.php", {
          login:'login',
          username: username,
          password: password
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else return;
  };
  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            id="username"
            type="email"
            className="form-control"
            placeholder="Enter username"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button className="btn btn-primary btn-block" onClick={this.login}>
          Login
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="forgot">password?</a>
        </p>
      </form>
    );
  }
}
