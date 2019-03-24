import thunk from 'redux-thunk'
import * as actions from './../../src/actions/aluno';
import * as types from './../../src/actions/types';
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Action Aluno", () => {
  let store;

  beforeEach(() => {
    store = mockStore({ alunos: [] });
  })

  test("Adicionar aluno", () => {

    spyOn(actions, 'fetchAlunos');

    const expectedAction = {
      type: types.FETCH_ALUNOS
    }

    var newAluno = {
      nome: 'Teste aluno'
    };

    return store.dispatch(actions.addAluno(newAluno)).then(() => {
      console.log('store ==>', store);
      console.log(store.getActions());

      expect(store.getActions()).toEqual(expectedAction);
    })
  });

  test('should create an action to add a todo', () => {
    const alunos = [];
    const expectedAction = {
      type: types.FETCH_ALUNOS,
      alunos
    }

    return store.dispatch(actions.fetchAlunos(alunos)).then(() => {
      console.log('store ==>', store);
      expect(store.getActions()).toEqual(expectedAction);
    })
    // expect(mockFirebaseService).toEqual(expectedAction)
  })
})
