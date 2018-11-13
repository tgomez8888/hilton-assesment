import { indexBy, prop } from "ramda";
import { getRooms, getRoomsId, getRoomById } from "../../selectors";
import {
  setRoomsValue,
  roomValueChange,
  roomSelectionChange
} from "../../actions";
import reducer from "..";

describe("booking reducer", () => {
  const initialState = reducer(undefined, { type: "null" });
  const globalizeState = state => ({
    app: {
      booking: state
    }
  });
  const rooms = [
    { id: 1, priority: 1, selected: true, adults: "2", children: "1" },
    { id: 2, priority: 2, selected: true, adults: "1", children: "2" },
    { id: 3, priority: 3, selected: false, adults: "1", children: "0" },
    { id: 4, priority: 4, selected: false, adults: "1", children: "0" }
  ];

  test("A new rooms value is set in state and can be selected", () => {
    const action = setRoomsValue(rooms);
    const newState = reducer(initialState, action);
    const result = getRooms(globalizeState(newState));

    expect(result).toEqual(indexBy(prop("id"), rooms));
  });

  test("roomValue changes after calling reducer", () => {
    const action = roomValueChange(1, "adults", "2");
    const newState = reducer(initialState, action);    
    const result = getRoomById(globalizeState(newState), 1);

    expect(result).toEqual({
      id: 1,
      priority: 1,
      selected: true,
      adults: "2",
      children: "0"
    });
  });

  test("roomSelected changes after calling reducer", () => {
    const action = roomSelectionChange(2, "selected", true);
    const newState = reducer(initialState, action);    
    const result = getRoomById(globalizeState(newState), 2);

    expect(result).toEqual({
      id: 2,
      priority: 2,
      selected: true,
      adults: "1",
      children: "0"
    });
  });

  test("when getRoomsId is called it gets the right Ids", () => {
    const newRooms = [
      {id: 5, priority: 5, selected: true, adults: "1", children: "0"},
      {id: 6, priority: 6, selected: true, adults: "1", children: "0"},
      {id: 7, priority: 7, selected: true, adults: "1", children: "0"},
      {id: 8, priority: 8, selected: true, adults: "1", children: "0"}
    ]

    const action = setRoomsValue(newRooms);
    const newState = reducer(initialState, action);
    const result = getRoomsId(globalizeState(newState));

    expect(result).toEqual(["5","6","7","8"]);
  });


});
