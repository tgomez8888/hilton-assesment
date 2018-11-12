import React from "react";
import { mount, shallow } from "enzyme";
import  { defaultRooms } from "../../../services/booking";
import {Booking} from "..";

describe("Booking", () => {
  function render({ ids }) {
    return shallow(<Booking ids={ids} />);
  }

  test("renders corectly", () => {
    const wrapper = render({});

    expect(wrapper).toMatchSnapshot();
  });

  // test("when rooms are passed as props they override the state value", () => {
  //   const initialRooms = [
  //     { id: 1, priority: 1, selected: true, adults: "2", children: "1" },
  //     { id: 2, priority: 2, selected: true, adults: "1", children: "2" },
  //     { id: 3, priority: 3, selected: false, adults: "1", children: "0" },
  //     { id: 4, priority: 4, selected: false, adults: "1", children: "0" }
  //   ];
  //   const wrapper = render({ rooms: initialRooms });

  //   expect(wrapper.state().rooms).toEqual(initialRooms);
  // });

  // test("when no rooms passed as props the state uses default", () => {
  //   const wrapper = render({});

  //   expect(wrapper.state().rooms).toEqual(defaultRooms);
  // });  
});
