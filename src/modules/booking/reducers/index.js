import {assoc, groupBy, pipe, prop} from "ramda";
import createReducer from "../../utils/createReducer";
import ActionType from "../constants/actionType";
import {defaultRooms, processRoomSelectionChanges} from "../services/booking";


const initialState = {
    rooms: groupBy(prop("id"), defaultRooms)
};

const handlers = {
    [ActionType.SET_ROOMS_VALUE]: setRoomsValue,
    [ActionType.ROOM_SELECTION_CHANGE]: roomSelectionChange,
    [ActionType.ROOM_VAlue_CHANGE]: roomValueChange
};

const setRoomsValue = (state, {payload}) => {
    const {rooms} = payload;

    return assoc("rooms", groupBy(prop("id"), rooms), state);
}

const roomSelectionChange = (state, {payload}) => {
    const {id, name, value} = payload;
    const newRoom = pipe(
        prop("id"),
        assoc(name, value)
    )(state.rooms);
    const newRooms = pipe(
        assoc(id, newRoom),
        processRoomSelectionChanges
    )(state.rooms);

    return assoc("rooms", newRooms, state);
}

const roomValueChange = (state, {payload}) => {
    const {id, name, value} = payload;
    const newRoom = pipe(
        prop("id"),
        assoc(name, value)
    )(state.rooms);    
    const newRooms = assoc(id, newRoom, state.rooms);

    return assoc("rooms", newRooms, state);
}

export default createReducer(initialState, handlers);