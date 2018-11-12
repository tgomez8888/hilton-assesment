import React from "react";
import classnames from "classnames";
import RoomHeader from "./RoomHeader";
import RoomBody from "./RoomBody";
import enhance from "./enhancers";

export function Room({ room, onRoomSelectedChange, onRoomValueChange }) {
  const roomClasses = classnames({
    "card-container": true,
    "disabled": !room.selected
  });

  return (
    <div className={roomClasses}>
      <RoomHeader room={room} onRoomValuesChange={onRoomSelectedChange} />
      <RoomBody room={room} onRoomValuesChange={onRoomValueChange} />
    </div>
  );
}

export default enhance(Room);
