import React, { Component } from "react";
import HomeScreen from './HomeScreen';
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import { message } from "antd";

let apiBaseUrl =
  "http://localhost/t/select.php?table=user&column=id&value=1&login=login";
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    let localloginComponent = [];
    this.state = {
      username: "",
      password: "",
      menuValue: 1,
      loginComponent: localloginComponent
    };
  }
  render(){
  const onFinish = data => {
    let my = this;
    axios
      .get(apiBaseUrl + "&username=" + data.username + "&password=" + data.password)
      .then(function(response) {
        // handle success
        if (response.data) {
          console.log(response.data)
          console.log(response.data.first_name)
          localStorage.setItem('user', JSON.stringify(response.data));
          message.success("Successfully logged in");
          let screen=[];
          screen.push(<HomeScreen parentContext={my.props.appContext} key={'home'}/>)
          my.props.appContext.setState({loginPage:[],homeScreen:screen})
        } else message.error("User didn't found please enter correct credentials");
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        console.log("finally");
        // always executed
      });
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
    console.log('user'+errorInfo.values.username)
    if(errorInfo.values.username !== '' && errorInfo.values.username !== undefined)
       message.error("Please fill both fields");
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
      }
};
export default Login;



