const actionTypes = {
    GET_PLAYERS_LIST: 'GET_PLAYERS_LIST',

    CHANGE_NICKNAME: 'CHANGE_NICKNAME',
}

export type ActionType = {
    type: string,
    payload: any | undefined,
}

Object.freeze(actionTypes);

export default actionTypes;