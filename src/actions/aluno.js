import firebase from 'react-native-firebase';

import types from './types';

export const fetchAlunos = () => async (dispatch) => {

    try {      
      await firebase
        .database()
        .ref('/pessoas')
        .once('value')
        .then(snap => {
          console.log(snap)
          var alunoArr = [];
          snap.forEach(snapChild => {
            var item = snapChild.val();
            item.key = snapChild.key;

            alunoArr.push(item);
          })

            dispatch(fetchAlunoFinished(alunoArr));
        })
    } catch (error) {
      console.log(error);
    }
  };

export const addAluno = (aluno) => async (dispatch) => {
  try{
    console.log(aluno)
    if(aluno.id == '') {
      await firebase
        .database()
        .ref('/pessoas')
        .push(aluno)
    } else {
      var id = aluno.id;
      delete aluno.id

      await firebase
        .database()
        .ref('/pessoas/' + id)
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