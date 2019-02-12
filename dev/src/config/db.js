import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCCFQpacvIBdJZL9jybturxFarnwHZLtXw",
    authDomain: "buschool-a0b71.firebaseapp.com",
    databaseURL: "https://buschool-a0b71.firebaseio.com",
    projectId: "buschool-a0b71",
    storageBucket: "buschool-a0b71.appspot.com",
    messagingSenderId: "936086441417"
}

export const firebaseImpl = !firebase.apps.length ? firebase.initializeApp(config) : firebase;
export const firebaseDatabase = firebase.database();