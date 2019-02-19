import { showMessage, hideMessage } from "react-native-flash-message";
import { firebaseDatabase } from '../config/db';

import types from './types';

export const fetchAlunos = () => (dispatch) => {
  var itens = [];

  console.log('aqui')
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


