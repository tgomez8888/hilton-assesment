import { keys, path, pipe, prop, sort } from "ramda";

const localizeState = path(["app", "booking"]);

export function getRoomsId(state) {
  return pipe(
    localizeState,
    prop("rooms"),
    keys,
    sort
  )(state);
}

export function getRoomById(state, id) {
  return pipe(
    localizeState,
    prop("rooms"),
    prop(id)
  )(state);
}
