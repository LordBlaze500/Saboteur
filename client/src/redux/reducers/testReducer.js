import actionTypes from '../actionTypes';

const defaultState = {
    testField: 'abcde'
}

export default function(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.TEST_ACTION_SUCCESS: {
            return { ...state, testField: 'success' }
        }
        case actionTypes.TEST_ACTION_FAILURE: {
            return { ...state, testField: 'failure' }
        }
        default:
            return state;
    }
}
