import React, { Component } from "react";
import ShowTicket from "./components/ShowTicket";
import { Card, Mentions } from "antd";
export default class HomeScreen extends Component {
  render() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return (
      <div>
        <Card
          title={<h1>Welcome {user.first_name}</h1>}
          extra={<a href="sign-in">Logout?</a>}
          style={{ width: 530, left: "35%", top: "40px" }}
        >
          <div style={{ marginBottom: 10 }}>
            <div style={{ marginBottom: 10 }}>
              <Mentions
                style={{ width: "100%" }}
                placeholder={"First Name : "+user.first_name}
                readOnly
              ></Mentions>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Mentions
                style={{ width: "100%" }}
                placeholder={"Last Name : "+user.last_name}
                readOnly
              ></Mentions>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Mentions
                style={{ width: "100%" }}
                placeholder={"User : "+user.first_name}
                readOnly
              ></Mentions>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Mentions
                style={{ width: "100%" }}
                placeholder={"Travel id : "+user.travel_id}
                readOnly
              ></Mentions>
            </div>
          </div>
          <ShowTicket user={user} />
        </Card>
      </div>
    );
  }
}
