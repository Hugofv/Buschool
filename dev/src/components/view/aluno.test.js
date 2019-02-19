import React from 'react';
import Aluno from './aluno';
import firebase from 'firebase';
import renderer from 'react-test-renderer';
import { Icons } from 'react-native-fontawesome';

it('Teste da requisição de aluno', () => {
    
    jest.mock('firebase');
    jest.mock('react-native-fontawesome', () => Icons);

    firebase.initializeApp = () => {
        throw "Should not be hit in test"
    };

    const tree = renderer.create(<Aluno />).toJSON()
    expect(tree).toMatchSnapshot()
})