import { mapProps } from "recompose";
import { assoc, pipe } from "ramda";

function setHandlers({ room, onRoomValuesChange, onRoomSelectionChange }) {
  const onRoomValueChange = e => {
    if (!e || !e.target) return;

    return pipe(
      assoc(e.target.name, e.target.value),
      onRoomValuesChange
    )(room);
  };

  const onRoomSelectedChange = e => {
    if (!e || !e.target) return;

    return pipe(
      assoc(e.target.name, e.target.checked),
      onRoomSelectionChange
    )(room);
  };

  return {
    room,
    onRoomValueChange,
    onRoomSelectedChange
  };
}

export default mapProps(setHandlers);
