import React, { Component } from "react";
import { Statistic, Card, Row, Col } from "antd";
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

export default class TicketDetail extends Component {
  render() {
    const divStyle = { background: "#ececec", padding: "30px" };
    return (
      <div style={divStyle}>
        <Row gutter={16}>
          <Col span={24} style={{ marginTop: 32 }}>
            <Card>
              <Countdown
                title="Expires After"
                value={deadline}
                valueStyle={{ color: "#3f8600" }}
                format="HH:mm:ss:SSS"
              />
            </Card>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Start Date"
                value={15.03}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={""}
                suffix="2020"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="End Date"
                value={14.04}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={""}
                suffix="2020"
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
