import React from "react";
import { shallow, mount } from "enzyme";
import differenceObjects from "../../../../../../utils/fp/differenceObjects";
import EnhancedRoom, { Room } from "..";

describe("Room", () => {
  function render({ room, onChange }) {
    return shallow(<Room room={room} onRoomValuesChange={onChange} onRoomSelectedChange={onChange} />);
  }

  function renderEnhanced({ room, onValueChange, onSelectionChange }) {
    return mount(<EnhancedRoom room={room} onRoomValuesChange={onValueChange} onRoomSelectionChange={onSelectionChange} />);
  }  

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

  function testChangedValue(fieldName, value) {
    const testFunction = jest.fn();
    const room = {
      id: 1,
      priority: 2,
      selected: false,
      adults: 1,
      children: 0
    };
    const onValueChange = obj => {
      expect(differenceObjects(obj, room)).toEqual([[fieldName, value]]);
      testFunction(obj);
    };
    const wrapper = renderEnhanced({
      room,
      onValueChange
    });

    wrapper
      .find("[name='" + fieldName + "']")
      .first()
      .simulate("change", { target: { name: fieldName, value } });

    expect(testFunction).toBeCalled();
  }

  function testChangedChecked(fieldName, value) {
    const testFunction = jest.fn();
    const room = {
      id: 1,
      priority: 2,
      selected: false,
      adults: 1,
      children: 0
    };
    const onSelectionChange = obj => {
      expect(differenceObjects(obj, room)).toEqual([[fieldName, value]]);
      testFunction(obj);
    };
    const wrapper = renderEnhanced({
      room,
      onSelectionChange
    });

    wrapper
      .find("[name='" + fieldName + "']")
      .first()
      .simulate("change", { target: { name: fieldName, checked: value } });

    expect(testFunction).toBeCalled();
  }

  test("when selected is changed the onchange is called with a new value in selected", () => {
    testChangedChecked("selected", true);
  });

  test("when selected is changed the onchange is called with a new value in adults", () => {
    testChangedValue("adults", "2");
  });

  test("when selected is changed the onchange is called with a new value in children", () => {
    testChangedValue("children", "1");
  });
});
