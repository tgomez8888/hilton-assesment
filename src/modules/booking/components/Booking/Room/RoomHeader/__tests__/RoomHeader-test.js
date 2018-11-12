import React from "react";
import { shallow } from "enzyme";
import RoomHeader from "..";

describe("RoomHeader", () => {
  function render({ room, onChange }) {
    return shallow(<RoomHeader room={room} onRoomValuesChange={onChange} />);
  }

  test("renders only label when room priority is 1", () => {
    const roomPriority1 = { id: 1, priority: 1, selected: true };
    const wrapper = render({ room: roomPriority1, onChange: jest.fn() });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders checkbox label when room priority greater than 1", () => {
    const roomPriority2 = { id: 5, priority: 2, selected: false };
    const wrapper = render({ room: roomPriority2, onChange: jest.fn() });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("onChange is called when checkbox clicked", () => {
    const testFunction = jest.fn();
    const onChange = e => testFunction(e.target.name, e.target.value);

    const wrapper = render({
      room: { id: 5, priority: 2, selected: false},
      onChange
    });
    wrapper
      .find("input")
      .first()
      .simulate("change", { target: { name: "selected", value: true } });

    expect(testFunction).toBeCalledWith("selected", true);
  });
});
