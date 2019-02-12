import { showMessage, hideMessage } from "react-native-flash-message";

import types from './types';

export const fetchAlunos = () => async (dispatch) => {

  firebaseDatabase
    .ref('alunos')
    .on('value', snap => {
      console.log(snap)
    }, erro => console.log(erro))
  }


export const addAluno = (aluno) => async (dispatch) => {
    if (aluno && !aluno.id) {

      await firebaseDatabase
        .ref('alunos')
        .push(aluno)
    } else {
      var id = aluno.id;
      delete aluno.id

      await firebaseDatabase
        .ref()
        .child('/alunos/' + id)
        .set(aluno)
    }

    fetchAlunos();
}

const fetchAlunoFinished = alunos => ({
  type: types.FETCH_ALUNOS,
  alunos,
});