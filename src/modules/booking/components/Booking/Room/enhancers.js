import { connect } from "react-redux";
import { getRoomById } from "../../../selectors";

function mapStateToProps(state, { id }) {
  return {
    room:getRoomById(state, id )    
  };
}

export default connect(mapStateToProps);
