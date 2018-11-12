import { identity, keys, path, pipe, prop, sortBy } from "ramda";

const localizeState = path(["app", "booking"]);

export function getRooms(state) {
  return pipe(
    localizeState,    
    prop("rooms")    
  )(state);
}

export function getRoomsId(state) {
  return pipe(
    localizeState,    
    prop("rooms"),
    keys,    
    sortBy(identity)    
  )(state);
}

export function getRoomById(state, id) {
  return pipe(
    localizeState,
    prop("rooms"),
    prop(id)
  )(state);
}
