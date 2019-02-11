import * as firebase from 'firebase/';
import {config} from './keys';

firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth();

export { firebase, auth, database };