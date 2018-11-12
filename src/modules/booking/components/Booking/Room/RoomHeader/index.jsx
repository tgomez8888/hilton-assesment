import React from "react";

export function RoomHeader({room, onRoomValuesChange}){
  return(
    <div className="card-header">
      {room.priority > 1 &&
          <input type="checkbox" name="selected" checked={room.selected} onChange={onRoomValuesChange}/> 
      }
      Room {room.id}
    </div>
  );
}

export default RoomHeader;