import React from "react";
import { mount } from "enzyme";
import  { defaultRooms } from "../../../services/booking";
import Booking from "..";

describe("Booking", () => {
  function render({ rooms }) {
    return mount(<Booking rooms={rooms} />);
  }

  test("renders corectly", () => {
    const wrapper = render({});

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("when rooms are passed as props they override the state value", () => {
    const initialRooms = [
      { id: 1, priority: 1, selected: true, adults: "2", children: "1" },
      { id: 2, priority: 2, selected: true, adults: "1", children: "2" },
      { id: 3, priority: 3, selected: false, adults: "1", children: "0" },
      { id: 4, priority: 4, selected: false, adults: "1", children: "0" }
    ];
    const wrapper = render({ rooms: initialRooms });

    expect(wrapper.state().rooms).toEqual(initialRooms);
  });

  test("when no rooms passed as props the state uses default", () => {
    const wrapper = render({});

    expect(wrapper.state().rooms).toEqual(defaultRooms);
  });

  //   function testChangedValue(fieldName, value) {
  //     const wrapper = render();

  //     wrapper
  //       .find("[name='" + fieldName + "']")
  //       .first()
  //       .simulate("change", { target: { name: fieldName, value } });

  //   }

  //   function testChangedChecked(fieldName, value) {
  //     const testFunction = jest.fn();
  //     const room = {
  //       id: 1,
  //       priority: 2,
  //       selected: false,
  //       adults: 1,
  //       children: 0
  //     };
  //     const onChange = obj => {
  //       expect(differenceObjects(obj, room)).toEqual([[fieldName, value]]);
  //       testFunction(obj);
  //     };
  //     const wrapper = renderEnhanced({
  //       room,
  //       onChange
  //     });

  //     wrapper
  //       .find("[name='" + fieldName + "']")
  //       .first()
  //       .simulate("change", { target: { name: fieldName, checked: value } });

  //     expect(testFunction).toBeCalled();
  //   }

  //   test("when selected is changed the onchange is called with a new value in selected", () => {
  //     testChangedChecked("selected", true);
  //   });

  //   test("when selected is changed the onchange is called with a new value in adults", () => {
  //     testChangedValue("adults", "2");
  //   });

  //   test("when selected is changed the onchange is called with a new value in children", () => {
  //     testChangedValue("children", "1");
  //   });
});
