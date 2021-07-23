import actionTypes, { ActionType } from '../actionTypes';
import { Map } from 'immutable';

export interface ILobbyPlayer {
    clientId: string,
    nickname: string,
}

export interface IState {
    playersList: Map<string, ILobbyPlayer>,
}

const defaultState : IState = {
    playersList: Map([]),
}

export default function(state : IState = defaultState, action : ActionType) : IState {
    switch (action.type) {

        case actionTypes.GET_PLAYERS_LIST: {
            return {
                ...state,
                playersList: Map(action.payload.playersList.map((el : ILobbyPlayer) => [el.clientId, el]))
            }
        }

        default:
            return state;
    }
}
