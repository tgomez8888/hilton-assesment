import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { either, equals, isEmpty, isNil, values} from "ramda";
import { getRoomsId, getRooms } from "../../selectors";
import {setRoomsValue} from "../../actions";

const mapDispatchToProps = {
  setRoomsValue
};
function mapStateToProps(state, {setRoomsValue}) {
  const rooms = getRooms(state);
  const onSubmit = e => {
    e.preventDefault();
    // Here you could call GraphQL mutation to save rooms to server
    console.log(values(rooms));
  };
  return {
		ids: getRoomsId(state),
		onLoadRooms: setRoomsValue,
		onSubmit
  };
}

export default compose(
  // GraphQL Query to get rooms saved Data or load them in props
  connect(
    null,
    mapDispatchToProps
  ),
  lifecycle({
		componentDidMount(){
			const {rooms, setRoomsValue} = this.props;
			
			// If component is loaded with a value of rooms in props load it in state 
			if(!either(isNil, isEmpty)(rooms)){
				setRoomsValue(rooms);
			}
		},
		componentWillReaceiveProps(newProps){
			// If rooms are changed in components props to something different, update state.
			if(newProps.rooms && !equals(newProps.rooms,this.props.rooms)){
				this.props.setRoomsValue(newProps.rooms);
			}
		}
	}),
  connect(mapStateToProps)
);
