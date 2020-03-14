import React, { Component } from "react";
import Loginscreen from "./views/Loginscreen";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      homeScreen: []
    };
  }
  componentWillMount() {
    var loginPage = [];
    loginPage.push(<Loginscreen appContext={this} />);
    this.setState({
      loginPage: loginPage
    });
  }
  render() {
    return (
      <Layout>
        <Header style={{ textAlign: 'center', backgroundColor:'white'}}><h1>Ticket Management System</h1></Header>
        <Content>
          {this.state.loginPage}
          {this.state.homeScreen}
        </Content>
        <br />
        <br />
        <br />
        <Footer style={{ textAlign: 'center'}}>TMS ©2020 Created by Ahmad Ijaz</Footer>
      </Layout>
    );
  }
}
export default App;
