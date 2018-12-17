import types from './../actions/types';

const initialState = {
    alunos: []
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



