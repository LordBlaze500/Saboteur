const actionTypes = {
    TEST_ACTION: 'TEST_ACTION',
    TEST_ACTION_SUCCESS: 'TEST_ACTION_SUCCESS',
    TEST_ACTION_FAILURE: 'TEST_ACTION_FAILURE',

    GET_PLAYERS_LIST: 'GET_PLAYERS_LIST',

    CHANGE_NICKNAME: 'CHANGE_NICKNAME',
}

export type ActionType = {
    type: string,
    payload: any | undefined,
}

Object.freeze(actionTypes);

export default actionTypes;