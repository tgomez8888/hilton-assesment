import React from "react";
import { mount } from "enzyme";
import GuessSelector from "..";

describe("GuessSelector", () => {
  function render({ title, fieldName, value, options, disabled, onChange }) {
    return mount(
      <GuessSelector
        title={title}
        fieldName={fieldName}
        value={value}
        options={options}
        disabled={disabled}
        onChange={onChange}
      />
    );
  }

  test("renders disabled fields when disabled flag is true", () => {
    const wrapper = render({
      title: "My Guess Selector",
      fieldName: "my-guess",
      value: "2",
      options: ["0", "1", "2", "3"],
      disabled: true,
      onChange: jest.fn()
    });
    
    expect(wrapper.find("select").props().value).toEqual("2");    
    expect(wrapper.find("option")).toHaveLength(4);    
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders enabled fields when disabled flag is flase", () => {
    const wrapper = render({
        title: "My Guess Selector",
        fieldName: "my-guess",
        value: "2",
        options: ["0", "1", "2"],
        disabled: false,
        onChange: jest.fn()
      });
        
      expect(wrapper.find("select").props().value).toEqual("2");    
      expect(wrapper.find("option")).toHaveLength(3);    
      expect(wrapper.html()).toMatchSnapshot();
  });

  test("onChange is called when dropdown value changes", () => {
    const testFunction = jest.fn();
    const fieldName = "my-guess";
    const onChange = e => testFunction(e.target.name, e.target.value);
    const wrapper = render({
        title: "My Guess Selector",
        fieldName,
        value: "2",
        options: ["0", "1", "2", "3"],
        disabled: false,
        onChange
    });
    wrapper
      .find("select[name='" + fieldName + "']")
      .first()
      .simulate("change", { target: { name: fieldName, value: "1" } });

    expect(testFunction).toBeCalledWith(fieldName, "1");
  });  
});
