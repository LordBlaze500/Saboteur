const actionTypes = {
    GET_PLAYERS_LIST: 'GET_PLAYERS_LIST',

    CHANGE_NICKNAME: 'CHANGE_NICKNAME',
    CHANGE_NICKNAME_SUCCESS: 'CHANGE_NICKNAME_SUCCESS',
    CHANGE_NICKNAME_FAILURE: 'CHANGE_NICKNAME_FAILURE'
}

export type ActionType = {
    type: string,
    payload: any | undefined,
}

Object.freeze(actionTypes);

export default actionTypes;