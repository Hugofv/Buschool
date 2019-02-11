import firebase from 'react-native-firebase';
import { showMessage, hideMessage } from "react-native-flash-message";

import types from './types';

export const fetchAlunos = () => (dispatch) => {

  try {
    console.log('aqui');

    firebase
      .database()
      .ref('/alunos')
      .once('value')
      .then(snap => {
        console.log(snap.forEach(e => {
          console.log(e)
        }));

        snap.forEach(e => {
          console.log(e)
        })
       
      })
      .catch(erro => {
        showMessage({
          message: 'Não foi possível buscar os alunos',
          type: "danger",
          autoHide: true
        });
      })
  } catch (error) {
    showMessage({
      message: 'Não foi possível buscar os alunos',
      type: "danger",
      autoHide: true
    });
  }
}


export const addAluno = (aluno) => async (dispatch) => {
  try {
    if (!aluno.id) {

      await firebase
        .database()
        .ref('alunos')
        .push(aluno)
    } else {
      var id = aluno.id;
      delete aluno.id

      await firebase
        .database()
        .ref()
        .child('/alunos/' + id)
        .set(aluno)
    }

    fetchAlunos();
  } catch (error) {
    console.log(error)
  }
}

const fetchAlunoFinished = alunos => ({
  type: types.FETCH_ALUNOS,
  alunos,
});