import React from "react";
import { shallow, mount } from "enzyme";
import differenceObjects from "../../../../../../utils/fp/differenceObjects";
import EnhancedRoom, { Room } from "..";

describe("Room", () => {
  function render({ room, onChange }) {
    return shallow(<Room room={room} onRoomValuesChange={onChange} onRoomSelectedChange={onChange} />);
  }

  // function renderEnhanced({ room, onValueChange, onSelectionChange }) {
  //   return mount(<EnhancedRoom room={room} onRoomValuesChange={onValueChange} onRoomSelectionChange={onSelectionChange} />);
  // }  

  test("renders correctly", () => {
    const room = {
      id: 1,
      priority: 2,
      selected: false,
      adults: 1,
      children: 0
    };
    const wrapper = render({ room, onChange: jest.fn() });

    expect(wrapper.html()).toMatchSnapshot();
  });  
});
