import ActionType from "../constants/actionType";

export function setRoomsValue(rooms) {
  return {
    type: ActionType.SET_ROOMS_VALUE,
    payload: { rooms }
  };
}

export function roomValueChange(id, name, value) {
  return {
    type: ActionType.ROOM_VALUE_CHANGE,
    payload: { id, name, value }
  };
}

export function roomSelectionChange(id, name, value) {  
  return {
    type: ActionType.ROOM_SELECTION_CHANGE,
    payload: { id, name, value }
  };
}
