import React from "react";
import { mount } from "enzyme";
import {RoomBody} from "..";

describe("RoomBody", () => {
  function render({ room, onChange }) {
    return mount(<RoomBody room={room} onRoomValuesChange={onChange}/>);
  }

  test("renders disabled fields when room is not selected", () => {
    const roomNotSelected = { id: 1, selected: false, adults: 1, children: 0 };
    const wrapper = render({ room: roomNotSelected, onChange: jest.fn() });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders enabled fields when room is selected", () => {
    const roomNotSelected = { id: 1, selected: true, adults: 1, children: 0 };
    const wrapper = render({ room: roomNotSelected, onChange: jest.fn() });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("onChange is called when adults dropdown value changes", () => {
    const testFunction = jest.fn();
    const onChange = e => testFunction(e.target.name, e.target.value);

    const wrapper = render({
      room: { id: 5, selected: true, adults: 2, children: 1 },
      onChange
    });
    wrapper
      .find("select[name='adults']")
      .first()
      .simulate("change", { target: { name: "adults", value: "1" } });

    expect(testFunction).toBeCalledWith("adults", "1");    
  });

  test("onChange is called when chilren dropdown value changes", () => {
    const testFunction = jest.fn();
    const onChange = e => testFunction(e.target.name, e.target.value);

    const wrapper = render({
      room: { id: 5, selected: true, adults: 2, children: 1 },
      onChange
    });
    wrapper
      .find("select[name='children']")
      .first()
      .simulate("change", { target: { name: "children", value: "1" } });

    expect(testFunction).toBeCalledWith("children", "1");
  });
});
