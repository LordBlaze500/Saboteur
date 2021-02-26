import React from 'react';
import actionTypes from '../../redux/actionTypes';
import { IState } from '../../redux/reducers/lobbyReducer';
import { connect } from 'react-redux';
import { storeType } from '../../redux/store';
import { dispatchType } from '../../redux/store';

interface Props {
    playersList: IState["playersList"],
}

export class PlayersList extends React.PureComponent<Props> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
    }

    render() : JSX.Element {
        const { playersList } = this.props;

        return <React.Fragment>
            {
                playersList.map((el) => {
                    return <span>{el.clientId} {el.nickname}</span>
                })
            }
        </React.Fragment>
    }
}

const mapStateToProps = (store : storeType) => {
    return {
        playersList: store.lobbyReducer.playersList,
    }
}

const mapDispatchToProps = (dispatch : dispatchType) => {
    return {
        changeNickName: (nickname : String) => {
            dispatch({ type: actionTypes.CHANGE_NICKNAME, payload: nickname })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);
