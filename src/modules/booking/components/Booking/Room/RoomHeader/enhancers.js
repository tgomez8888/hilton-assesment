import { connect } from "react-redux";
import { roomSelectionChange } from "../../../../actions";

function mapDispatchToProps(dispatch, { room }) {
  return {
    onRoomValuesChange: e => {
      if (!e || !e.target) return;
      dispatch(roomSelectionChange(room.id, e.target.name, e.target.checked));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
);
