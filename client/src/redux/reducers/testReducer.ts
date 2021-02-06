import actionTypes from '../actionTypes';

const defaultState = {
    testField: 'abcde'
}

interface IAction {
    type: string,
    payload?: string,
}

interface IState {
    testField?: string,
}

export default function(state : IState = defaultState, action : IAction) : IState {
    switch (action.type) {
        case actionTypes.TEST_ACTION_SUCCESS: {
            return { ...state, testField: action.payload }
        }
        case actionTypes.TEST_ACTION_FAILURE: {
            return { ...state, testField: 'failure' }
        }
        default:
            return state;
    }
}
