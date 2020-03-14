import React, { Component } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
import { Button} from "antd";
import Login from "./Login";
import Register from "./Registration";
class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginscreen: [],
      loginmessage: "",
      buttonLabel: "Register",
      isLogin: true
    };
  }
  componentWillMount() {
    var loginscreen = [];
    loginscreen.push(
      <Login parentContext={this} appContext={this.props.parentContext} />
    );
    var loginmessage = "Login";
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage
    });
  }
  handleClick(event) {
    // console.log("event",event);
    var loginmessage;
    if (this.state.isLogin) {
      var loginscreen = [];
      loginscreen.push(<Register parentContext={this} />);
      loginmessage = "Registration";
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: "Login",
        isLogin: false
      });
    } else {
      var loginscreen = [];
      loginscreen.push(<Login parentContext={this} />);
      loginmessage = "Login";
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: "Register",
        isLogin: true
      });
    }
  }
  render() {
    return (
      <Card        title={this.state.loginmessage}
       extra={<Button onClick={event => this.handleClick(event)}>{this.state.buttonLabel}</Button>} 
       style={{ width: 530, left: "35%", top: "40px" }}>
        <Row>
          <Col span={16} offset={2}>
            {this.state.loginscreen}
          </Col>
        </Row>
      </Card>
    );
  }
}
const style = {
  margin: 15
};
export default Loginscreen;
