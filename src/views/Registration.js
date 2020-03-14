import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Login from "./Login";
import axios from "axios";
import { message } from "antd";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: ""
    };
  }
  handleClick(event) {
    const { username, password, first_name, last_name } = this.state;

    if (first_name === undefined || first_name === "") {
      message.error("Please Enter First Name");
      return;
    }
    if (last_name === undefined || last_name === "") {
      message.error("Please Enter Last Name");
      return;
    }
    if (username === undefined || username === "") {
      message.error("Please Enter Email");
      return;
    }
    if (password === undefined || password === "") {
      message.error("Please Enter Password");
      return;
    }
    let travel_id = Math.floor(Math.random() * 111201);
    let parms =
      "first_name=" +
      first_name +
      "&last_name=" +
      last_name +
      "&username=" +
      username +
      "&password=" +
      password +
      "&travel_id=" +
      travel_id;
    let apiBaseUrl = "http://localhost/t/insert.php?action=register&";
    //console.log(apiBaseUrl + parms);
    //To be done:check for empty values before hitting submit
    var self = this;
    axios
      .get(apiBaseUrl + parms)
      .then(function(response) {
        console.log(response);
        if (response.status === 200) {
          //  console.log("registration successfull");
          message.success('User '+first_name+' successfully created')
          var loginscreen = [];
          loginscreen.push(<Login appContext={self.props.appContext} />);
          var loginmessage = "Login";
          self.props.parentContext.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage,
            buttonLabel: "Register",
            isLogin: true
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange={(event, newValue) =>
                this.setState({ first_name: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange={(event, newValue) =>
                this.setState({ last_name: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15
};
export default Register;
