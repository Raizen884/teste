Game_Party.prototype.maxBattleMembers = function () {
    return 8;
};
let ignisEngineSmartFollowers_Game_Player_moveStraight = Game_Player.prototype.moveStraight;
Game_Player.prototype.moveStraight = function (d) {
    ignisEngineSmartFollowers_Game_Player_moveStraight.call(this, ...arguments);
    this._followers.updateMove()
};

let ignisEngineSmartFollowers_Game_Player_moveDiagonally = Game_Player.prototype.moveDiagonally;
Game_Player.prototype.moveDiagonally = function (horz, vert) {
    ignisEngineSmartFollowers_Game_Player_moveDiagonally.call(this, ...arguments)
    this._followers.updateMove()
};

Game_Followers.prototype.updateMove = function () {
    for (let i = this._data.length - 1; i >= 0; i--) {
        const precedingCharacter = i > 0 ? this._data[i - 1] : $gamePlayer;
        if (this.distanceToChase(precedingCharacter, this._data[i]))
            this._data[i].chaseCharacter(precedingCharacter);
    }
};

Game_Followers.prototype.distanceToChase = function (precedingCharacter, thisCharacter) {
    if (Math.abs(precedingCharacter._x - thisCharacter._x) > 1 || Math.abs(precedingCharacter._y - thisCharacter._y) > 1)
        return true;
    return false;
}