import React from "react";
import GuessSelector from "./GuestSelector";
import enhance from "./enhancers";

export function RoomBody({room, onRoomValuesChange}){
  return(
    <div className="card-body">      
      <GuessSelector
        title="Adults (18+)"
        fieldName="adults"
        options={["1", "2"]}
        value={room.adults}
        disabled= {!room.selected}
        onChange={onRoomValuesChange}        
      />  
      <GuessSelector
        title="Children (0-17)"
        fieldName="children"
        options={["0", "1", "2"]}
        value={room.children}
        disabled= {!room.selected}
        onChange={onRoomValuesChange}        
      />        
    </div>
  );
}

export default enhance(RoomBody);