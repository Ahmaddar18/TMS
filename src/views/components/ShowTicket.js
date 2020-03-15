import React, { Component } from "react";
import { Modal, Button } from "antd";
import TicketDetail from './TicketDetail';
import ReserveSeat from './ReserveSeat'
export default class ShowTicket extends Component {
    state = {
        modal1Visible: false,
        modal2Visible: false,
      };
    
      setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
      }
    
      setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
      }
  render() {
      const Title = "Ticket Detail for "+this.props.user.first_name;
    return (
      <div>
        <Button type="primary"  onClick={() => this.setModal2Visible(true)}>
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
        <Button type="primary" style={{marginLeft:'25px'}} onClick={() => this.setModal1Visible(true)}>
          Reserve Seat
        </Button>
        <Modal
          title="Select Seat"
          style={{ top: 20 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
         <ReserveSeat />
        </Modal>
      </div>
    );
  }
}
