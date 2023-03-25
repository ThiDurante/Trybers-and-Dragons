import Character from '../Character';
import Fighter from '../Fighter';
// import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _char1: Character | Fighter;
  private _char2: Character | Fighter;
  // if char type is Character | Fighter, breaks dexterity
  constructor(char1: Character | Fighter, char2: Character | Fighter) {
    super(char1);
    this._char1 = char1;
    this._char2 = char2;
  }

  override fight(): number {
    while (this._char1.lifePoints > 0 && this._char2.lifePoints > 0) {
      if (this._char1.strength > this._char2.strength) {
        this._char1.attack(this._char2);
        this._char2.attack(this._char1);
      } else {
        this._char2.attack(this._char1);
        this._char1.attack(this._char2);
      }
    }
    return super.fight();
  }
}