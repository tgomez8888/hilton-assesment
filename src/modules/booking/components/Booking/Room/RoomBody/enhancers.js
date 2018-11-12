import { connect } from "react-redux";
import { roomValueChange } from "../../../../actions";

function mapDispatchToProps(dispatch, { room }) {
  return {
    onRoomValuesChange: e => {
      if (!e || !e.target) return;
      dispatch(roomValueChange(room.id, e.target.name, e.target.value));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
);
