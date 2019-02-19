import firebase from 'firebase';
import 'firebase/database';
import { addAluno } from './aluno';

jest.mock('firebase/app');
jest.mock('firebase/database');

describe("Action Aluno", () => {
    test("test", () => {
        jest.mock('firebase');
        firebase.initializeApp = () => {
                throw "Should not be hit in test"
        };
        
        addAluno();
    });
})