import { defaultRooms } from "../../services/booking";
import { indexBy, prop } from "ramda";
import { getRooms, getRoomsId, getRoomById } from "../../selectors";
import {
  setRoomsValue,
  roomValueChange,
  roomSelectionChange
} from "../../actions";
import reducer from "..";

describe("booking reducer", () => {
  const initialState = indexBy(prop("id"), defaultRooms);
  const rooms = [
    { id: 1, priority: 1, selected: true, adults: "2", children: "1" },
    { id: 2, priority: 2, selected: true, adults: "1", children: "2" },
    { id: 3, priority: 3, selected: false, adults: "1", children: "0" },
    { id: 4, priority: 4, selected: false, adults: "1", children: "0" }
  ];

  test("A new rooms value is set in state and can be selected", () => {
    const action = setRoomsValue(rooms);
    const newState = reducer(initialState, action);
    const result = getRooms(newState);

    expect(result).toEqual(indexBy(prop("id"), rooms));
  });  
});
