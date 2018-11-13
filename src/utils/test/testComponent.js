import React from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

const decorate = connect(() => ({}));
const store = initialState =>
  createStore(() => ({
    app: initialState
  }));

export function testComponent(component, props, initialState) {
  const Decorated = decorate(component);

  return (
    <Provider store={store(initialState)}>
      <Decorated {...props} />
    </Provider>
  );
}
