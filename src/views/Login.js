import React, { Component } from "react";
import HomeScreen from './HomeScreen';
import { Form, Input, Button, Checkbox } from "antd";
import { message } from "antd";

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
    var localloginComponent = [];
    this.state = {
      username: "",
      password: "",
      menuValue: 1,
      loginComponent: localloginComponent,
      loginRole: "student"
    };
  }
  render(){
  const onFinish = values => {
    console.log("Success:", values);
    message.success("Successfully logged in");
//    if(response.data.code === 200){

  let screen=[];
  screen.push(<HomeScreen parentContext={this.props.parentContext}/>)
  this.props.parentContext.setState({loginPage:[],homeScreen:screen})
 // }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
   // message.error("This is an error message");
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



