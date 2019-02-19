import React from "react";
import Aluno from "./aluno";
import configureStore from "redux-mock-store";
import { shallow, mount } from 'enzyme';
import { Container } from "native-base";

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  preferences: {
    save_photos_locally: false,
    open_to_camera: false
  }
};

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
    it("Renderizar componentes", () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.contains(<Container />)).toMatchSnapshot();
    });
});
