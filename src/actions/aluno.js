import firebase from 'react-native-firebase';

import types from './types';

export const fetchAlunos = () => async (dispatch) => {
    //dispatch(loginStart());
    try {
      
      await firebase
        .database()
        .ref('/pessoas')
        .once('value', snap => {
            var alunos = snap.val();
            dispatch(fetchAlunoFinished(alunos));
        })
    } catch (error) {
      console.log(error);
    }
  };

const fetchAlunoFinished = alunos => ({
    type: types.FETCH_ALUNOS,
    alunos,
});