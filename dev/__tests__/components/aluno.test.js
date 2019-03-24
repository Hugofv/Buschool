import React from "react";
import Aluno from "./../../src/components/view/aluno";
import configureStore from "redux-mock-store";
import { shallow, mount } from 'enzyme';
import { Container } from "native-base";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = { };

function setup() {
  const props = {
    fetchAlunos: jest.fn()
  };
  const enzymeWrapper = shallow(
    <Aluno {...props}/>,
    { context: { store: mockStore(initialState) } }
  );

  return {
    props,
    enzymeWrapper
  };
}

describe("<Aluno/>", () => {
    it("Renderizar aluno", () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.contains(<Container />)).toMatchSnapshot();
    });
});
