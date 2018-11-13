import { indexBy, prop } from "ramda";
import { mount } from "enzyme";
import { defaultRooms } from "../../../services/booking";
import EnhancedBooking, { Booking } from "..";
import { testComponent } from "../../../../../utils/test/testComponent";

describe("Booking", () => {
  function render({ ids, onSubmit }) {
    return mount(
      testComponent(
        Booking,
        { ids, onSubmit },
        { booking: { rooms: indexBy(prop("id"), defaultRooms) } }
      )
    );
  }

  function renderEnhanced({ rooms }) {
    return mount(
      testComponent(
        EnhancedBooking,
        { rooms },
        { booking: { rooms: defaultRooms } }
      )
    );
  }

  test("renders corectly", () => {
    const wrapper = render({ ids: ["1", "2", "3", "4"] });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("when rooms are passed as props they override the state value", () => {
    const initialRooms = [
      { id: 1, priority: 1, selected: true, adults: "2", children: "1" },
      { id: 2, priority: 2, selected: true, adults: "1", children: "2" },
      { id: 3, priority: 3, selected: false, adults: "1", children: "0" },
      { id: 4, priority: 4, selected: false, adults: "1", children: "0" }
    ];
    const wrapper = renderEnhanced({ rooms: initialRooms });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("when no rooms passed as props the state uses default", () => {
    const wrapper = renderEnhanced({});

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("on submit click onSubmit gets called", () => {
    const testFunction = jest.fn();
    const onSubmit = () => {testFunction();}
    const wrapper = render({ ids:[], onSubmit });    

    wrapper.find("form").simulate("submit");

    expect(testFunction).toBeCalled();
  })
});
