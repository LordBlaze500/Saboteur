import React from 'react';
import { MainWrapper, OptionsWrapper, PlayersListWrapper, ChatWrapper } from './MainView.sc';
import PlayersList from '../PlayersList/PlayersList';

interface Props {
    
}

const MainView = () : JSX.Element => {
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

export default MainView;

