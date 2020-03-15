import React, { Component } from "react";
import { Modal, Button } from "antd";
import TicketDetail from './TicketDetail';
export default class ShowTicket extends Component {
  state = {
    modal2Visible: false
  };
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  render() {
      const Title = "Ticket Detail for "+this.props.user.first_name;
    return (
      <div>
        <Button type="primary" onClick={() => this.setModal2Visible(true)}>
          Show Ticket Detail
        </Button>
        <Modal
          title={Title}
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <TicketDetail />
        </Modal>
      </div>
    );
  }
}
