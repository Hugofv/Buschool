import types from './../actions/types';

const initialState = {
    alunos: [{
        cpf: "232423423",
        dataNascimento: "23423423",
        endereco: "23423",
        escola: "23423",
        nome: "hugo",
        nomeResponsavel: "23423423",
        observacoes: "23423",
        rg: "2342342",
        telefoneResponsavel: "234234",
        key: "-LTyCV0aBFwetTAoXSgz"
    }]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALUNOS: {
            const { alunos } = action;
            return {
                ...state,
                alunos
            };
        }
        default: {
        return state;
        }
    }
};



