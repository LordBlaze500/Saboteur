export class LobbyPlayer {
    private readonly ip : string;
    private nickname : string;

    constructor(argIp : string) {
        this.ip = argIp;
        this.nickname = 'Unnamed player';
    }

    getIp() : string {
        return this.ip;
    }

    setNickname(argNickname : string) : void {
        this.nickname = argNickname;
    }
}

export class Lobby {
    private number : number;
    private readonly minNumber : number;
    private readonly maxNumber : number;
    private readonly players : Array<LobbyPlayer>;

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

    isPlayerInTheLobby(argIp : string) : boolean {
        return !!this.players.find((player) => player.getIp() === argIp);
    }

    getPlayersList() : Array<LobbyPlayer> {
        return this.players;
    }
}

