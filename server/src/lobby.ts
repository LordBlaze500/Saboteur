export class LobbyPlayer {
    private readonly clientId : string;
    private nickname : string;

    constructor(argClientId : string) {
        this.clientId = argClientId;
        this.nickname = 'Unnamed player';
    }

    getClientId() : string {
        return this.clientId;
    }

    getNickname() : string {
        return this.nickname;
    }

    setNickname(argNickname : string) : void {
        this.nickname = argNickname;
    }

    toObject() : Object {
        return { clientId: this.clientId, nickname: this.nickname };
    }
}

export class Lobby {
    private number : number;
    private readonly minNumber : number;
    private readonly maxNumber : number;
    private players : Array<LobbyPlayer>;

    constructor() {
        this.number = 5;
        this.minNumber = 3;
        this.maxNumber = 9;
        this.players = [];
    }

    setNumber(argNumber : number) : void {
        this.number = argNumber;
    }

    addPlayer(argPlayer : LobbyPlayer) : void {
        this.players.push(argPlayer);
    }

    removePlayer(argClientId : string) : void {
        this.players = this.players.filter((el) => el.getClientId() !== argClientId);
    }

    isPlayerInTheLobby(argClientId : string) : boolean {
        return !!this.players.find((player) => player.getClientId() === argClientId);
    }

    getPlayersList() : Array<LobbyPlayer> {
        return this.players;
    }

    getPlayersListToArray() : Array<Object> {
        return this.players.map((el) => el.toObject());
    }
}

