import React from 'react';
import { MainWrapper, OptionsWrapper, PlayersListWrapper, ChatWrapper } from './MainView.sc';
import PlayersList from '../PlayersList/PlayersList';

interface Props {
    
}

export class MainView extends React.PureComponent<Props> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
    }

    render() : JSX.Element {
        return <MainWrapper>
            <OptionsWrapper>
     
            </OptionsWrapper>
            <PlayersListWrapper>
                <PlayersList />
            </PlayersListWrapper>
            <ChatWrapper>

            </ChatWrapper>
        </MainWrapper>
    }
}

export default MainView;
