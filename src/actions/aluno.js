import firebase from 'react-native-firebase';

import types from './types';

export const fetchAlunos = () => async (dispatch) => {
    try {      
      await firebase
        .database()
        .ref('/pessoas')
        .once('value', snap => {
            var alunos = snap.val();
            var alunoArr = [];
            snap.forEach(snapChild => {
              var item = snapChild.val();
              item.key = snapChild.key;

              alunoArr.push(item);
            });

            console.log(alunoArr);
            dispatch(fetchAlunoFinished(alunoArr));
        })
    } catch (error) {
      console.log(error);
    }
  };

export const addAluno = (aluno) => async (dispatch) => {
  try{
    await firebase
      .database()
      .ref('/pessoas')
      .set(aluno)
  } catch (error) {
    console.log(error)
  }
}

const fetchAlunoFinished = alunos => ({
    type: types.FETCH_ALUNOS,
    alunos,
});