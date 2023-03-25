import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _char: Character | Fighter,
    private _monsters: (Monster | Fighter | SimpleFighter)[],
  ) {
    super(_char);
  }

  override fight(): number {
    while (this._char.lifePoints > 0 
      && this._monsters
        .some((monster) => monster.lifePoints > 0)) {
      this._monsters.forEach((monster) => {
        this.round(monster);
      });
    }
    return super.fight();
  }

  round(monster: Monster | Fighter | SimpleFighter): void {
    if (this._char.lifePoints > 0) {
      this._char.attack(monster);
      if (monster.lifePoints > 0) {
        monster.attack(this._char);
      }
    }
  }
}