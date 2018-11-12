import {
  __,
  always,
  assoc,
  curry,
  evolve,
  gte,
  ifElse,
  identity,
  indexBy,
  lt,
  map,
  pipe,
  prop,
  values
} from "ramda";

export const defaultRooms = [
  { id: 1, priority: 1, selected: true, adults: "1", children: "0" },
  { id: 2, priority: 2, selected: false, adults: "1", children: "0" },
  { id: 3, priority: 3, selected: false, adults: "1", children: "0" },
  { id: 4, priority: 4, selected: false, adults: "1", children: "0" }
];

export const updateRoom =  curry((newRoom, rooms) => pipe(
  indexBy(prop("id")),
  assoc(newRoom.id, newRoom),
  values
)(rooms)); 

const isHigherPriority = curry((newRoom, room) => pipe(
  prop("priority"),
  lt(__, newRoom.priority)
)(room));

const isLowerOrSamePriority = curry((newRoom, room) => pipe(
  prop("priority"),
  gte(__, newRoom.priority)
)(room));

const setDefaultValues = evolve({
  selected: always(false),
  adults: always("1"),
  children: always("0")
});

/**
 * This method receives a room with changes and calculates if the other rooms need to changes.
 * If room is selected all rooms with higher priority (lower priority value) will 
 * be selected.
 * If room is not selected all rooms with lower or same priority (higher priority value) will be 
 * unselected and set default values.
 * @param {Object} newRoom This is the modified room object 
 * @param {[Object]} rooms The current list of rooms in state
 * @returns {[Object]} New list of rooms with modifications 
 */
export const processRoomSelectionChanges = (newRoom, rooms) => {
   
  const turnOnHigherPriority = map(
    ifElse(isHigherPriority(newRoom), assoc("selected", true), identity)
  ); 
  const turnOffLowerPriority = map(
    ifElse(
      isLowerOrSamePriority(newRoom),
      setDefaultValues,
      identity
    )
  );

  return  pipe(
    updateRoom(newRoom),
    ifElse(() => newRoom.selected, turnOnHigherPriority, turnOffLowerPriority)
  )(rooms);
}