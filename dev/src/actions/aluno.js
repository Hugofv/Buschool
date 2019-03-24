import { firebaseDatabase } from '../config/db';

import types from './types';

export function fetchAlunos() {
  var itens = [];

  return firebaseDatabase
    .ref('/alunos')
    .on('value', snap => {
      (snap).forEach(snapChild => {
        var item = snapChild.val();
        item.key = snapChild.key;

        itens.push(item);
      })

      dispatch(fetchAlunoFinished(itens));
    }, erro => dispatch(fetchAlunoError()))
  }


export function addAluno(aluno) {
  try{
    if (aluno && !aluno.id) {

      firebaseDatabase
        .ref('/alunos')
        .push(aluno)
    } else {
      var id = aluno.id;
      delete aluno.id

      firebaseDatabase
        .ref()
        .child('/alunos/' + id)
        .set(aluno)
    }
  } catch (erro) {
    console.log(erro);
  }

  return fetchAlunos();
}


export const deleteAluno = (aluno) => async (dispatch) => {
  try{
    if (aluno && aluno.key) {

      await firebaseDatabase
        .ref('/alunos').child(aluno.key)
        .remove()
    } else {
      console.log("Não foi possível excluir o aluno")  
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

const fetchAlunoError = () => ({
  type: types.FETCH_ALUNOS_ERROR
});
