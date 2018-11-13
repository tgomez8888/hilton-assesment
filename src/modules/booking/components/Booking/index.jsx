import React, { Component } from "react";
import { either, equals, ifElse, identity, isEmpty, isNil } from "ramda";
import {
  defaultRooms,
  processRoomSelectionChanges,
  updateRoom
} from "../../services/booking";
import Room from "./Room";
import Actions from "./Actions";
import "../../styles/booking.scss";

export class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: ifElse(either(isNil, isEmpty), () => defaultRooms, identity)(
        props.rooms
      )
    };
  }

  componentWillReceiveProps(newProps) {
    // I would expect an HOC that wraps this component and calls a GraphQL Query to get the rooms
    // and pass the rooms value as a prop either initially or as a load function. This
    // will be for load function, constructor is for initial prop load

    if (newProps.rooms && !equals(newProps.rooms, this.props.rooms)) {
      this.setState({ rooms: newProps.rooms });
    }
  }

  handleRoomValueChanges = newRoom => {
    this.setState({ rooms: updateRoom(newRoom, this.state.rooms) });
  };

  handleRoomSelectionChanges = newRoom => {
    this.setState({
      rooms: processRoomSelectionChanges(newRoom, this.state.rooms)
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    /* Here we can call the GraphQL mutation that sends the rooms list stored in this.state.rooms */

    console.log(this.state.rooms);
  };

  render() {
    const { rooms } = this.state;
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          {rooms &&
            rooms.map(room => (
              <Room
                key={room.id}
                room={room}
                onRoomValuesChange={this.handleRoomValueChanges}
                onRoomSelectionChange={this.handleRoomSelectionChanges}
              />
            ))}
          <Actions />
        </form>
      </main>
    );
  }
}

export default Booking;
