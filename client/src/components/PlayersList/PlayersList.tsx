import React from 'react';
import { IState } from '../../redux/reducers/lobbyReducer';
import { useSelector } from "react-redux";
import { storeType } from '../../redux/store';

interface Props {
    playersList: IState["playersList"],
}

const PlayersList = () : JSX.Element => {
    const playersList = useSelector((store: storeType) => store.lobbyReducer.playersList );

    return <React.Fragment>
        {
            playersList.valueSeq().map((el) => {
                return <span key={el.clientId}>{el.clientId} {el.nickname}</span>
            })
        }
    </React.Fragment>
}

export default PlayersList;

// const mapDispatchToProps = (dispatch : dispatchType) => {
//     return {
//         changeNickName: (nickname : String) => {
//             dispatch({ type: actionTypes.CHANGE_NICKNAME, payload: nickname })
//         }
//     }
// }
