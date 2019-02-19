import { firebaseDatabase } from '../config/db';

import types from './types';

export const fetchAlunos = () => (dispatch) => {
  var itens = [];

  firebaseDatabase
    .ref('/alunos')
    .on('value', snap => {
      snap.forEach(snapChild => {
        var item = snapChild.val();
        item.key = snapChild.key;

        itens.push(item);
      })

      dispatch(fetchAlunoFinished(itens));
    }, erro => console.log(erro))
  }


export const addAluno = (aluno) => async (dispatch) => {
  try{
    if (aluno && !aluno.id) {

      await firebaseDatabase
        .ref('/alunos')
        .push(aluno)
    } else {
      var id = aluno.id;
      delete aluno.id

      await firebaseDatabase
        .ref()
        .child('/alunos/' + id)
        .set(aluno)
    }
  } catch (erro) {
    console.log(erro);
  }

    fetchAlunos();
}

const fetchAlunoFinished = alunos => ({
  type: types.FETCH_ALUNOS,
  alunos,
});