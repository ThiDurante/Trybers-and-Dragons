import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  static counter = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    Ranger.counter += 1;
    this._energyType = 'stamina';
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return Ranger.counter;
  }
}