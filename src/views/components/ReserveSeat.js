import React, { Component } from "react";
import SeatPicker from "react-seat-picker";

class ReserveSeat extends Component {
  state = {
    loading: false
  };

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(`Added seat  ${number}, row  ${row}, id  ${id}`);
        const newTooltip = `Reserved by you`;
        addCb(row, number, id, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(`Removed seat  ${number}, row  ${row}, id  ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const rows = [
      [
        { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
        { id: 2, number: 2, tooltip: "Cost: 150 NOK" },
        null,
        {
          id: 3,
          number: "3",
          isReserved: true,
          orientation: "east",
          tooltip: "Reserved by Tor-Morten"
        },
        { id: 4, number: "4", orientation: "west" , tooltip: "Cost: 190 NOK"},
        null,
        { id: 5, number: 5 , tooltip: "Cost: 150 NOK"},
        { id: 6, number: 6 , tooltip: "Cost: 150 NOK"}
      ],
      [
        {
          id: 7,
          number: 1,
          isReserved: true,
          tooltip: "Reserved by Ahmad Ijaz"
        },
        { id: 8, number: 2, isReserved: true ,tooltip: "Reserved"},
        null,
        { id: 9, number: "3", isReserved: true, orientation: "east" },
        { id: 10, number: "4", orientation: "west" , tooltip: "Cost: 190 NOK"},
        null,
        { id: 11, number: 5 , tooltip: "Cost: 150 NOK"},
        { id: 12, number: 6 , tooltip: "Cost: 150 NOK"}
      ],
      [
        { id: 13, number: 1 , tooltip: "Cost: 150 NOK"},
        { id: 14, number: 2 , tooltip: "Cost: 150 NOK"},
        null,
        { id: 15, number: 3, isReserved: true, orientation: "east" },
        { id: 16, number: "4", orientation: "west" , tooltip: "Cost: 190 NOK"},
        null,
        { id: 17, number: 5 , tooltip: "Cost: 150 NOK"},
        { id: 18, number: 6 , tooltip: "Cost: 150 NOK"}
      ],
      [
        { id: 19, number: 1, tooltip: "Cost: 205 NOK" },
        { id: 20, number: 2 , tooltip: "Cost: 150 NOK"},
        null,
        { id: 21, number: 3, orientation: "east" , tooltip: "Cost: 190 NOK"},
        { id: 22, number: "4", orientation: "west" , tooltip: "Cost: 190 NOK"},
        null,
        { id: 23, number: 5 , tooltip: "Cost: 150 NOK"},
        { id: 24, number: 6 , tooltip: "Cost: 150 NOK"}
      ],
      [
        { id: 25, number: 1, isReserved: true ,tooltip: "Reserved"},
        { id: 26, number: 2, orientation: "east", tooltip: "Cost: 190 NOK"},
        null,
        { id: 27, number: "3", isReserved: true ,tooltip: "Reserved"},
        { id: 28, number: "4", orientation: "west" , tooltip: "Cost: 190 NOK"},
        null,
        { id: 29, number: 5, tooltip: "Cost: 110 NOK" },
        { id: 30, number: 6, isReserved: true ,tooltip: "Reserved"}
      ]
    ];
    const { loading } = this.state;
    return (
      <div>
        <div style={{ marginTop: "1px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
          />
        </div>
      </div>
    );
  }
}

export default ReserveSeat;
