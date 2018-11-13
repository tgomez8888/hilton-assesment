import { mount } from "enzyme";
import EnhancedRoom, { Room } from "..";
import { testComponent } from "../../../../../../utils/test/testComponent";
import { defaultRooms } from "../../../../services/booking";

describe("Room", () => {
  function render({ room }) {
    return mount(testComponent(Room, {room}));
  }

  function renderEnhanced({ id }) {
    return mount(testComponent(EnhancedRoom, {id}, {booking: {rooms: defaultRooms}}));
  }  

  test("renders correctly", () => {
    const room = {
      id: 1,
      priority: 2,
      selected: false,
      adults: 1,
      children: 0
    };
    const wrapper = render({ room });

    expect(wrapper.html()).toMatchSnapshot();
  });  

  test("loads the correct room from state and renders correctly", () => {    
    const wrapper = renderEnhanced({ id: 2 });

    expect(wrapper.html()).toMatchSnapshot();
  });  
});
