import React from "react";
import Room from "./Room";
import Actions from "./Actions";
import enhance from "./enhancers";
import "../../styles/booking.scss";

export function Booking({ids, onSubmit}){
  return (
    <main>
      <form onSubmit={onSubmit}>
        {ids &&
          ids.map(id=> (
            <Room
              key={id}
              id={id}                
            />
          ))}
        <Actions />          
      </form>
    </main>
  );
}

export default enhance(Booking);
