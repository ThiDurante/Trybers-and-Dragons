import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  // lifePoints: number;
  // strength: number;
  defense: number;
  energy?: Energy;

  // attack(enemy: Fighter | SimpleFighter):void; // is this param declaration right?
  special?(enemy: Fighter | SimpleFighter):void;
  levelUp(): void;
  // receiveDamage(attackPoints: number): number
}