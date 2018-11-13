import {
  defaultRooms,
  updateRoom,
  isHigherPriority,
  isLowerOrSamePriority,
  setDefaultValues,
  processRoomSelectionChanges
} from "../booking";

describe("booking-service", () => {
  test("isHigherPriority", () => {
    const newRoom = { id: 20, priority: 2 };
    const room1 = { id: 1, priority: 1 };
    const room2 = { id: 2, priority: 2 };
    const room3 = { id: 3, priority: 3 };

    expect(isHigherPriority(newRoom, room1)).toBeTruthy();
    expect(isHigherPriority(newRoom, room2)).toBeTruthy();
    expect(isHigherPriority(newRoom, room3)).toBeFalsy();
  });

  test("isLowerOrSamePriority", () => {
    const newRoom = { id: 20, priority: 2 };
    const room1 = { id: 1, priority: 1 };
    const room2 = { id: 2, priority: 2 };
    const room3 = { id: 3, priority: 3 };

    expect(isLowerOrSamePriority(newRoom, room1)).toBeFalsy();
    expect(isLowerOrSamePriority(newRoom, room2)).toBeTruthy();
    expect(isLowerOrSamePriority(newRoom, room3)).toBeTruthy();
  });

  test("setDefaultValues", () => {
    const room = {
      id: 1,
      priority: 1,
      selected: true,
      adults: "2",
      children: "2"
    };
    const newRoom = setDefaultValues(room);

    expect(newRoom).toEqual({
      id: 1,
      priority: 1,
      selected: false,
      adults: "1",
      children: "0"
    });
  });

  test("updateRoom", () => {
    const newRoom = {id: 2, priority: 2, selected: true, adults: "2", children: "1"}; 
    const newRooms = updateRoom(newRoom, defaultRooms);

    expect(newRooms).toMatchSnapshot();
  })

  describe("processSelectionChanges", () => {
    test("when a room on middle priority is unselected, unselect all below", () =>{
      const rooms =[ { id: 1, priority: 1, selected: true, adults: "1", children: "0" },
      { id: 2, priority: 2, selected: true, adults: "2", children: "1" },
      { id: 3, priority: 3, selected: true, adults: "2", children: "2" },
      { id: 4, priority: 4, selected: true, adults: "1", children: "2" }];
      const newRoom = { id: 2, priority: 2, selected: false, adults: "2", children: "1" };
      const newRooms = processRoomSelectionChanges(newRoom, rooms);

      expect(newRooms).toEqual(defaultRooms);
    })

    test("when a room on end priority is selected, selects all above", () => {
      const finalRooms = [{ id: 1, priority: 1, selected: true, adults: "1", children: "0" },
      { id: 2, priority: 2, selected: true, adults: "1", children: "0" },
      { id: 3, priority: 3, selected: true, adults: "1", children: "0" },
      { id: 4, priority: 4, selected: true, adults: "1", children: "0" }
      ];
      const newRoom =  { id: 4, priority: 4, selected: true, adults: "1", children: "0" };
      const newRooms = processRoomSelectionChanges(newRoom, defaultRooms);

      expect(newRooms).toEqual(finalRooms);
    })
  });
});
