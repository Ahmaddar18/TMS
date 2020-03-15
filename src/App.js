import React, { Component } from "react";
import Loginscreen from "./views/Loginscreen";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      homeScreen: []
    };
  }
  UNSAFE_componentWillMount() {
    var loginPage = [];
    loginPage.push(<Loginscreen appContext={this} key={"login-screen"} />);
    this.setState({
      loginPage: loginPage
    });
  }
  render() {
    return (
      <Layout>
        <Header style={{ textAlign: "center", backgroundColor: "yellow" }}>
          <h1>Ticket Management System</h1>
        </Header>
        <Content style={{ textAlign: "center", height: '100%' }}>
          {this.state.loginPage}
          {this.state.homeScreen}
          <br />
          <br />
          <br />
        </Content>
        <Footer style={{ textAlign: "center", minHeight:'70px'}}>
          TMS ©2020 Created by Ahmad Ijaz
        </Footer>
      </Layout>
    );
  }
}
export default App;
