import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import App from "../src/App";

// imported as a connected component!
const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialState = {};

describe("Testing App", () => {
  it("renders as expected", () => {
    const wrapper = shallow(<App />, {
      context: { store: mockStore(initialState) }
    });
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
